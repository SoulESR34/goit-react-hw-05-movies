import React from 'react';
import PropTypes from 'prop-types';

import { CardLink, Image, TitleContainer } from './MovieCard.styled';
export const MovieCard = ({movieID, title, image}) => {
  return (
    <li>
      <CardLink to={`/movies/${movieID}`} >
        <Image src={`https://image.tmdb.org/t/p/w200${image}`} alt={title} width="100%"/>
        <TitleContainer>
            {title}
        </TitleContainer>
      </CardLink>
    </li>
  );
};

MovieCard.protoTypes = {
  movieID: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}