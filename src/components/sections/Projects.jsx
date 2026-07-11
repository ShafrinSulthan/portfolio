import { useMemo, useState } from 'react';
import { useGithubData } from '../../hooks/useGithubData';
import { getLanguageColor } from '../../services/githubService';
import { PROJECT_OVERRIDES } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../common/TiltCard';
import Carousel from '../common/Carousel';

function getOverride(repoName) {
  const name = repoName.toLowerCase();
  return PROJECT_OVERRIDES.find((o) => name.includes(o.matchSubstring));
}

export default function Projects() {
  const { repos, loading, error } = useGithubData();
  const [search, setSearch] = useState('');
  const [lang, setLang] = useState('All');

  const languages = useMemo(
    () => ['All', ...new Set(repos.map((r) => r.language).filter(Boolean))],
    [repos]
  );

  const filtered = useMemo(
    () =>
      repos.filter(
        (r) =>
          (lang === 'All' || r.language === lang) &&
          r.name.toLowerCase().includes(search.toLowerCase())
      ),
    [repos, search, lang]
  );

  const featured = filtered.filter((r) => r.featured);
  const recent = filtered.filter((r) => !r.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Projects"
          title="Pulled live from GitHub"
          subtitle="Every repository below is fetched in real time from my GitHub account."
        />

        <div className="projects-controls glass-panel">
          <div className="projects-search">
            <i className="bi bi-search" />
            <input
              type="text"
              placeholder="Search repositories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search projects"
            />
          </div>
          <div className="projects-filters">
            {languages.map((l) => (
              <button
                key={l}
                className={`tag-pill projects-filter-btn ${lang === l ? 'is-active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="projects-status">Loading repositories…</p>}
        {error && <p className="projects-status projects-status--error">{error}</p>}

        {!loading && !error && (
          <>
            {featured.length > 0 && (
              <>
                <h3 className="projects-subtitle">Featured</h3>
                <Carousel
                  items={featured}
                  ariaLabel="featured project"
                  visibleCounts={{ desktop: 2, tablet: 2, mobile: 1 }}
                  renderItem={(repo, i) => <ProjectCard repo={repo} index={i} />}
                />
              </>
            )}

            {recent.length > 0 && (
              <>
                <h3 className="projects-subtitle">Recent</h3>
                <Carousel
                  items={recent}
                  ariaLabel="recent project"
                  visibleCounts={{ desktop: 3, tablet: 2, mobile: 1 }}
                  renderItem={(repo, i) => <ProjectCard repo={repo} index={i} />}
                />
              </>
            )}

            {filtered.length === 0 && <p className="projects-status">No repositories match your search.</p>}
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ repo, index }) {
  const override = getOverride(repo.name);
  const liveUrl = override?.liveUrl || repo.homepage;
  const videoUrl = override?.videoUrl;

  return (
    <Reveal index={index % 6} className="project-card-wrap">
      <TiltCard className="project-card">
        {repo.featured && videoUrl && (
          <div className="project-card__media">
            <video src={videoUrl} autoPlay muted loop playsInline />
            <span className="project-card__badge">Featured</span>
          </div>
        )}

        <div className="project-card__body">
          {repo.featured && !videoUrl && (
            <span className="project-card__badge project-card__badge--inline">Featured</span>
          )}
          <h4 className="project-card__name">{repo.name}</h4>
          <p className="project-card__desc">{repo.description}</p>

          {repo.topics.length > 0 && (
            <div className="project-card__stack">
              {repo.topics.slice(0, 6).map((topic) => (
                <span key={topic} className="tag-pill">{topic}</span>
              ))}
            </div>
          )}

          <div className="project-card__meta">
            {repo.language && (
              <span className="project-card__lang">
                <span className="dot-lang" style={{ background: getLanguageColor(repo.language) }} />
                {repo.language}
              </span>
            )}
            <span><i className="bi bi-star-fill" /> {repo.stars}</span>
            <span><i className="bi bi-diagram-2-fill" /> {repo.forks}</span>
          </div>

          <div className="project-card__links">
            <a href={repo.htmlUrl} target="_blank" rel="noreferrer" className="btn-glass btn-sm">
              <i className="bi bi-github me-1" /> Code
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-gradient btn-sm">
                <i className="bi bi-box-arrow-up-right me-1" /> Live
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}
