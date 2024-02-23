import React, { useEffect, useState } from 'react';
import { services } from 'server/movies.service';
import { MoviesList } from 'components/MoviesList/MoviesList';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const requestInfo = async () => {
      const movies = await services.getTrending();
      setTrendingMovies(movies.results);
    };

    requestInfo();
  }, []);

  return (
    <main className='container'>
      <h1>Peliculas destacadas del mes</h1>
      {trendingMovies.length > 0 ? (
        <MoviesList movies={trendingMovies} />
      ) : (
        <p>Peliculas no encontradas</p>
      )}
    </main>
  );
};

export default Home
