import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL,
            expenses: data.price
        };
        const url = `http://localhost:5000/addService`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)

        })
            .then(res => console.log("server side response", res))
    };
   
const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set('key', 'e186a2cb4171e579d2fdda583dd8b920');
    imageData.append('image', event.target.files[0])

    axios.post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error)
        });

}
    

    return (
        <section>
        <div style={{
  backgroundColor: "#F4FDFB",
  height:"100%"
}} className="container-fluid row">
                <div className="col-md-4 col-xs-6">
                    <Sidebar/>
                </div>
                 <h1>Add Service</h1> 
                <div className="col-md-8 col-xs-6 d-flex justify-content-center mt-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
               
                <div className="col-md-4 col-xs-12">
                <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Service Title</Form.Label>
    <input placeholder="Enter title" type="text"   className="form-control" name="title" ref={register({ required: true })} />
                        {errors.title && <span style={{ color: 'red' }}>Title is required</span>}

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <input placeholder="Enter description" type="text"   className="form-control" name="description" ref={register({ required: true })} />
                        {errors.description && <span style={{ color: 'red' }}>Description is required</span>}
    {/* <Form.Control as="textarea" rows={3}  onSubmit={handleSubmit(onSubmit)} placeholder="Enter description"/> */}
    
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Expenses</Form.Label>
    <input placeholder="Expenses" type="text"   className="form-control" name="price" ref={register({ required: true })} />
                        {errors.price && <span style={{ color: 'red' }}>Expenses is required</span>}

  </Form.Group>
</Form>
                </div>
                <div className="col-md-4 col-xs-12">
                <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
  <Form.Group>
  <Form.Label>Upload Image</Form.Label>
  <input  type="file" onChange={handleImageUpload}   name="image" />
                        
  
  </Form.Group>
  <Button variant="primary" type="submit" className='mt-3'>
                Submit
            </Button>
</Form>
                </div>
              
                </div>
              
            </div>
           
      </section>
      
      
    );
};

export default AddService;