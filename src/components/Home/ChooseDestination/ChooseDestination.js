import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const ChooseDestination = () => {
    return (
        <div className='text-center'>
            <h6 >CHOOSE YOUR PLACE</h6>
            <h1>Popular Destinations</h1>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/18/55/65/87/caption.jpg" />
    <Card.Body>
      <Card.Title>Cox's Bazar</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/89/ba/61/89ba61ca245c5b0aa837e2c824cc24c8.jpg" />
    <Card.Body>
      <Card.Title>Sajek Valley</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://dailyasianage.com/library/1518804196_3.jpg" />
    <Card.Body>
      <Card.Title>Nafa-khum Waterfalls
</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
        </div>
    );
};

export default ChooseDestination;