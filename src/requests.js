const requests = {
  fetchNetflixOriginal: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchLatest: `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,

  // Requests for TV Series
  fetchNetflixOriginalSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTvSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchPopularTvSeries: `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  fetchTopRatedSeries: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  fetchRomanceSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchComedySeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
};

export default requests;
