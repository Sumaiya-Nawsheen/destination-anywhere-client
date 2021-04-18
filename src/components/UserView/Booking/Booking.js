import React, { useContext, useEffect } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {  Button, Card, CardGroup, Col, Form, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useParams } from 'react-router';
import PaymentProcess from '../PaymentProcess/PaymentProcess';



const Booking = ({id}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { value1, value2, value4 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;
    const [orderedItem, setOrderedItem] = value4;

const {_id} = useParams();
console.log(_id)

useEffect(() => {
  fetch(`http://localhost:5000/dashboard/booking/${_id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setOrderedItem(data)
      })
}, [_id])

    const onSubmit = data => {
      const eventData = {
        name: data.name,
        email: data.email,
        destination: data.destination,
        expenses: data.expenses,
        date:new Date()
        
    };
    console.log(eventData);
    const url = `http://localhost:5000/addBooking`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)

    })
        .then(res => console.log("server side response", res))
};


  

    return (
        <section>
        <div style={{
  backgroundColor: "#F4FDFB",
  height:"100%"
}} className="container-fluid row">
                <div className="col-md-4 col-xs-6">
                    <Sidebar/>
                </div>

                <div className="col-md-8 col-xs-6 d-flex justify-content-center" style={{  backgroundColor: "#F4FDFB" }}>
                <div>
                <h2>Please Confirm your Booking.</h2>

<CardGroup style={{marginTop:'30px'}}>
  <Card>
   <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label><br/>
                        <input defaultValue={loggedInUser.name|| registeredUser.name} type="text"  id="formBasicEmail" name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label><br/>
                    <input defaultValue={loggedInUser.email || registeredUser.email}  type="email" id="formBasicEmail"  name="email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tour Plan</Form.Label><br/>
                    <input defaultValue={orderedItem.title}  type="text" id="formBasicAddress" className="form-control readonly" name="destination" ref={register({ required: true })} />
                    {errors.destination && <span style={{ color: 'red' }}>destination is required</span>}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Expenses</Form.Label><br/>
                    <input defaultValue={orderedItem.expenses}  type="text" id="formBasicAddress" className="form-control readonly" name="expenses" ref={register({ required: true })} />
                    {errors.expenses && <span style={{ color: 'red' }}>expenses is required</span>}
                </Form.Group>
                <fieldset>
    <Form.Group>
      <Form.Label as="legend" column sm={4}>
       Pay with
      </Form.Label>
      <Col sm={8} as={Row} >
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
                <Button variant="primary" type="submit">
    Submit
  </Button>
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

