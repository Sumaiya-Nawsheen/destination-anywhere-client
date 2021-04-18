
import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewsMapping = ({givenReview}) => {
    return (
        <div className='text-center'>
    <div>
        <Card style={{height:'380px',marginLeft:'15px', marginBottom:'10px'}}>
        <Card.Img style={{height:'100px',borderRadius:'50%', width:'40%'}} variant="top" src={givenReview.photo} />
<Card.Body>
  <Card.Title>{givenReview.name} </Card.Title>
  <Card.Text>
   {givenReview.occupation}
  </Card.Text>
  <Card.Text style={{height:'130px'}}>
   {givenReview.descriptions}
  </Card.Text>
</Card.Body>
</Card>
        </div>
            
        </div>
    );
};

export default ReviewsMapping;
