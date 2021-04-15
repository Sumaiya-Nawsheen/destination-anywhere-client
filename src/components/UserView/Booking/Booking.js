import React from 'react';
import {  Card, CardGroup, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import PaymentProcess from '../PaymentProcess/PaymentProcess';




const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    const handleBlur = (event) => {
        console.log(event.target.value);
    }

    return (
<div>
<h2>Please Confirm your Booking.</h2>

<CardGroup style={{marginTop:'30px'}}>
  <Card>
   <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <input placeholder="Name" type="text" onBlur={handleBlur} id="formBasicEmail" className="form-control" name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input placeholder="Enter email" onBlur={handleBlur} type="email" id="formBasicEmail" className="form-control" name="email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Tour Plan</Form.Label>
                    <input placeholder="Destination" onBlur={handleBlur} type="text" id="formBasicAddress" className="form-control" name="destination"  />
            
                </Form.Group>
                <fieldset>
    <Form.Group>
      <Form.Label as="legend" column sm={2}>
       Pay with
      </Form.Label>
      <Col sm={10} as={Row} >
        <Form.Check
          type="radio"
          label="Credit Card"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          className="mr-5"
        />
        <Form.Check
          type="radio"
          label="PayPal"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group>
  
                </Form.Group>
</Form>
    </Card.Body>
  </Card>
</CardGroup>
<div className='mt-3'>
<PaymentProcess/>
</div>

</div>
        
        
    );
};

export default Booking;