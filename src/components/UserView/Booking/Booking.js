import React, { useContext, useEffect } from 'react';
import {  Card, CardGroup, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';




const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { value1, value2, value4 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;
    const [orderedItem, setOrderedItem] = value4;

  //   const { _id } = useParams();

  //   console.log(_id)
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/checkout/${_id}`)
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data)
  //             setOrderedItem(data)
  //         })
  // }, [_id])

    const handleBlur = (event) => {
        console.log(event.target.value);
    }

    return (

      <section>
      <div style={{
  backgroundColor: "#F4FDFB",
  height:"100%"
}} className="container-fluid row">
              <div className="col-md-4 col-xs-6">
                  <Sidebar></Sidebar>
              </div>
              <div className="col-md-8 col-xs-6 d-flex justify-content-center" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              <div>
              <h2>Please Confirm your Booking.</h2>

<CardGroup style={{marginTop:'30px'}}>
  <Card>
   <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <input defaultValue={loggedInUser.name|| registeredUser.name} type="text" onBlur={handleBlur} id="formBasicEmail"  name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input defaultValue={loggedInUser.email || registeredUser.email} onBlur={handleBlur} type="email" id="formBasicEmail"  name="email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Tour Plan</Form.Label>
                    <input placeholder="Destination" onBlur={handleBlur} type="text" id="formBasicAddress"  name="destination"  />
            
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
             
              </div>
             
          </div>
    </section>

        
        
    );
};

export default Booking;