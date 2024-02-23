
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmYxYTg0YzcwNDgyNWJjYjkzOTZiMzljYzdmMjU5OSIsInN1YiI6IjY1ZDY5NTU4NWNhNzA0MDE3YzBlNTU3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uFpU0hivs2ODKMI7etDeGKo4ng_p3oo2-5oDCGTP3WU',
  },
};

const requestMovies = async route => {
  const url = `https://api.themoviedb.org/3/${route}&language=en-US`;
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error('Error al obtener datos de la API');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al procesar la solicitud');
  }
};

export const services = {
  getTrending: () => requestMovies('trending/all/week?'),
  getSearch: query => requestMovies(`search/movie?query=${query}&include_adult=false&page=1`),
  getDetails: movieID => requestMovies(`movie/${movieID}?`),
  getCredits: movieID => requestMovies(`movie/${movieID}/credits?`),
  getReviews: movieID => requestMovies(`movie/${movieID}/reviews?&page=1`),
};
