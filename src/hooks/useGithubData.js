import { useEffect, useState } from 'react';
import { fetchGithubUser, fetchGithubRepos, markFeatured } from '../services/githubService';
import { GITHUB_USERNAME } from '../constants/data';

export function useGithubData() {
  const [state, setState] = useState({
    user: null,
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [user, repos] = await Promise.all([
          fetchGithubUser(GITHUB_USERNAME),
          fetchGithubRepos(GITHUB_USERNAME),
        ]);

        if (cancelled) return;

        setState({
          user,
          repos: markFeatured(repos),
          loading: false,
          error: null,
        });
      } catch (err) {
        if (cancelled) return;
        setState({
          user: null,
          repos: [],
          loading: false,
          error: err.message || 'Failed to load GitHub data.',
        });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
