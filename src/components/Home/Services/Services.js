import { Button } from 'react-bootstrap';
import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    return (
        <div className='text-center'>
    

        <div>
        <Card style={{height:'480px',marginLeft:'15px', marginBottom:'10px'}}>
<Card.Img style={{height:'200px'}} variant="top" src={service.imageURL} />
<Card.Body>
  <Card.Title>{service.title} </Card.Title>
  <Card.Text style={{height:'130px'}}>
   {service.description}
  </Card.Text>
  <Card.Text>
   ${service.expenses}
  </Card.Text>
  <Link to = {`/dashboard/booking/${service._id}`}><Button   variant="primary">
  Book Hurry up!
        </Button></Link>
</Card.Body>
</Card>
        </div>
            
        </div>
    );
};

export default Services;