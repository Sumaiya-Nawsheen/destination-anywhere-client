import React, { useContext } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {  Button, Card, CardGroup, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';




const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { value1, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;


    const onSubmit = data => {
      const eventData = {
        email: data.email,
     
    };
    console.log(eventData);
    const url = `http://localhost:5000/addAdmin`;


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
              <h2>Add an new admin.</h2>

<CardGroup style={{marginTop:'30px'}}>
  <Card>
   <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <input  type="text"  id="formBasicEmail" name="email" className="form-control" ref={register({ required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                    </Form.Group>
                
                <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Card.Body>
  </Card>
</CardGroup>
                </div>

            </div>
            </div>
      </section>
           
       
    );
};

export default MakeAdmin;


