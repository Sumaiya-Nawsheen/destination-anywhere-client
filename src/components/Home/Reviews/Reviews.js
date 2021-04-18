import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import ReviewsMapping from '../ReviewsMapping/ReviewsMapping';
import Services from '../Services/Services';




const Reviews = () => {


  
  const [givenReviews, setGivenReviews] =useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/showreviews')
        .then(response => response.json())
        .then(data => setGivenReviews(data))
    }, [])

  return (
      <div className='text-center mb-3'>
     <h6>REVIEW & TESTIMONIALS</h6> 
         <h2>Top Reviews for Destination Anywhere?</h2>
           {
            givenReviews.length === 0 && <CircularProgress color="secondary" />
          }
           <Container style={{ width: "85%" }}>
                  <Row sm={1} md={2} lg={3} style={{ display: "flex" }}>
                  {
            givenReviews.map(givenReview => 
              <ReviewsMapping givenReview={givenReview} key={givenReview._id}></ReviewsMapping>)
           
            
          }
                  </Row>
              </Container>
          
      </div>
  );
        };

export default Reviews;