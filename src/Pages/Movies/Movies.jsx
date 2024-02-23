import React, { useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { services } from 'server/movies.service';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const requestMovies = async search => {
    const results = await services.getSearch(search);
    setMovies(results.results);
  };

  return (
    <main className='container'>
      <SearchForm requestInfo={requestMovies}>Movies</SearchForm>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
