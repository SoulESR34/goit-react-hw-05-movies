import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from 'server/movies.service';
import { ReviewContainer, Comments, Comment } from './Reviews.styled';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([])
  const { movieID } = useParams();

  const requestReviews = async searchID => {
    const results = await services.getReviews(searchID);
    setReviewsData(results.results);
  };

  useEffect(()=>{
    requestReviews(movieID)
  },[movieID])

  return (
    <ReviewContainer>
      <h2>Reviews</h2>
      <Comments>
        {reviewsData.length > 0 && reviewsData.map((r)=>
          <Comment key={r.id}>
            <h3>author: {r.author}</h3>
            <p>{r.content}</p>
          </Comment>
        )}
      </Comments>
    </ReviewContainer>
  );
};

export default Reviews;
