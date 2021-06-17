const API_KEY = "f6d3eed06ab3124976c6ecc8926da3bc";

const requests = {
  fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchLatest: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  // Requests for TV Series
  fetchNetflixOriginalSeries: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTvSeries: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchPopularTvSeries: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchRomanceSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorSeries: `/discover/tv?api_key=${API_KEY}&with_genres=27`,

  // fetchTvSeriesGenre: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  // fetchTrending: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // fetchLatest: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
