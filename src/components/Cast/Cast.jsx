import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from 'server/movies.service';
import { CastList, CharacterCard } from './Cast.styled';

const Cast = () => {
  const [castData, setCastData] = useState([])
  const { movieID } = useParams();

  const requestcast = async searchID => {
    const results = await services.getCredits(searchID);
    setCastData(results.cast);
  };

  useEffect(()=>{
    requestcast(movieID)
  },[movieID])


  return (
    <div>
      <h2>cast</h2>
      <CastList>
        {castData.length > 0 && castData.map((c)=>
          <CharacterCard key={c.id}>
            <img src={`https://image.tmdb.org/t/p/w200${c.profile_path}`} alt="" />
            <h3>{c.character}</h3>
          </CharacterCard>
        )}
      </CastList>
    </div>
  );
};

export default Cast;