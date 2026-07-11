// ==========================================================================
// GitHub API service
// Fetches live repository + profile data for the configured GITHUB_USERNAME.
// Uses sessionStorage as a lightweight cache to stay under the unauthenticated
// rate limit (60 req/hr) if the user revisits or hot-reloads during dev.
// ==========================================================================

const API_BASE = 'https://api.github.com';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

function readCache(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL_MS) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // sessionStorage may be unavailable (private browsing) — fail silently
  }
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${url}`);
  }
  return res.json();
}

export async function fetchGithubUser(username) {
  const cacheKey = `gh-user-${username}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  const data = await fetchJson(`${API_BASE}/users/${username}`);
  writeCache(cacheKey, data);
  return data;
}

export async function fetchGithubRepos(username) {
  const cacheKey = `gh-repos-${username}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  const repos = await fetchJson(
    `${API_BASE}/users/${username}/repos?per_page=100&sort=updated`
  );

  const cleaned = repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description provided for this repository yet.',
      htmlUrl: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      updatedAt: repo.updated_at,
      createdAt: repo.created_at,
      isArchived: repo.archived,
    }));

  writeCache(cacheKey, cleaned);
  return cleaned;
}

export async function fetchRepoLanguages(username, repoName) {
  const cacheKey = `gh-lang-${username}-${repoName}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  try {
    const data = await fetchJson(`${API_BASE}/repos/${username}/${repoName}/languages`);
    writeCache(cacheKey, data);
    return data;
  } catch {
    return {};
  }
}

/**
 * Derives a "featured" flag: repos with stars, a homepage/live-demo link,
 * or a topic tag of "featured" are surfaced above the rest.
 */
export function markFeatured(repos) {
  return repos
    .map((repo) => ({
      ...repo,
      featured: repo.stars > 0 || Boolean(repo.homepage) || repo.topics.includes('featured'),
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

export function getLanguageColor(language) {
  const colors = {
    JavaScript: '#F1E05A',
    TypeScript: '#3178C6',
    Java: '#B07219',
    Python: '#3572A5',
    HTML: '#E34C26',
    CSS: '#563D7C',
    SCSS: '#C6538C',
    'C++': '#F34B7D',
    C: '#555555',
    Shell: '#89E051',
    Dockerfile: '#384D54',
    Vue: '#41B883',
    PHP: '#4F5D95',
  };
  return colors[language] || 'var(--accent-indigo-light)';
}
