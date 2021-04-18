import React, { useContext } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {  Button, Card, CardGroup, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';




const UsersReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { value1, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;


    const onSubmit = data => {
      const eventData = {
        name: data.name,
        occupation: data.occupation,
        descriptions: data.descriptions,
        photo: loggedInUser.photo
    };
    console.log(eventData);
    const url = `https://mighty-mountain-22826.herokuapp.com/addReview`;


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
              <h2>Please give some review.</h2>

<CardGroup style={{marginTop:'30px'}}>
  <Card>
   <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <input defaultValue={loggedInUser.name|| registeredUser.name} type="text"  id="formBasicEmail" name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Occupation</Form.Label>
                    <input placeholder="Your occupation"  type="text" id="formBasicEmail" className="form-control" name="occupation" ref={register({ required: true })} />
                    {errors.occupation && <span style={{ color: 'red' }}>Occupation is required</span>}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descriptions</Form.Label>
                    <input placeholder="Share your experience"  type="text" id="formBasicEmail" className="form-control" name="descriptions" ref={register({ required: true })} />
                    {errors.descriptions && <span style={{ color: 'red' }}>Description is required</span>}
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

export default UsersReview;