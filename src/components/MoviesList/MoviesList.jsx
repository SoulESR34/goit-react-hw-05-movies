import React from 'react';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ListContainer } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <div className='container'>
      <ListContainer>
        {movies.map(m => (
          <MovieCard
            key={m.id}
            movieID={m.id}
            title={m.title ?? m.name}
            image={m.poster_path}
          />
        ))}
      </ListContainer>
    </div>
  );
};

MoviesList.protoTypes = {
  movies: PropTypes.arr
}