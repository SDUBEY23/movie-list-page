const API_KEY = "f6d3eed06ab3124976c6ecc8926da3bc";

const requests = {
  fetchTrending: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchLatest: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
