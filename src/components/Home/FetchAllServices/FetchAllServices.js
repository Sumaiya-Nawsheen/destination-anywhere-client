import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';

const FetchAllServices = () => {

    const [services, setServices] =useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
          .then(response => response.json())
          .then(data => setServices(data))
      }, [])

    return (
        <div className='text-center'>
        <h6 >MODERN & BEAUTIFUL</h6>
        <h1>Our Most Popular Adventures</h1>
             {
              services.length === 0 && <CircularProgress color="secondary" />
            }
             <Container style={{ width: "85%" }}>
                    <Row sm={1} md={2} lg={3} style={{ display: "flex" }}>
                    {
              services.map(service => <Services service={service} key={service._id}></Services>)
            }
                    </Row>
                </Container>
            
        </div>
    );
};

export default FetchAllServices;