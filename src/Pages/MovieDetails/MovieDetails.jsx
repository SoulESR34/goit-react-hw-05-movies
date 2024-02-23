import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from 'server/movies.service';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  DeatilsSection,
  DataContainer,
  GenresContainer,
  MoreInfoSection,
  ButtonsContainer,
  MoreInfoBtn
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const navigate = useNavigate();
  const { movieID } = useParams();

  const requestMovie = async id => {
    const results = await services.getDetails(id);
    setMovieDetails(results);
  };

  useEffect(() => {
    requestMovie(movieID);
  }, [movieID]);

  const handleClick = e => {
    const button = e.target.textContent.toLowerCase();
    navigate(button);
  };

  const { title, vote_average, overview, genres } = movieDetails;
  return (
    <main>
      <DeatilsSection>
        <img
          src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
          alt=" "
        />
        <DataContainer>
          <div>
            <h2>{title}</h2>
            <p>User score: {vote_average * 10}%</p>
          </div>

          <div>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>

          <div>
            <h2>Genres</h2>
            <GenresContainer>
              {genres && genres.map(g => <p key={g.name}>{g.name}</p>)}
            </GenresContainer>
          </div>
        </DataContainer>
      </DeatilsSection>

      <MoreInfoSection>
        <h2>Additional information</h2>
        <ButtonsContainer>
          <MoreInfoBtn onClick={e => handleClick(e)}>Cast</MoreInfoBtn>
          <MoreInfoBtn onClick={e => handleClick(e)}>Reviews</MoreInfoBtn>
        </ButtonsContainer>
      </MoreInfoSection>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
