import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='text-center'>
        <h6 >MODERN & BEAUTIFUL</h6>
        <h1>Our Most Popular Adventures</h1>
        <CardDeck>
<Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.
  </Card.Text>
</Card.Body>

</Card>
<Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This card has supporting text below as a natural lead-in to additional
    content.{' '}
  </Card.Text>
</Card.Body>

</Card>
<Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>Card title</Card.Title>
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

export default Services;