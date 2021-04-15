import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Booking from '../../UserView/Booking/Booking';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div>
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Sidebar></Sidebar>
    </Col>
    <Col xs={6} md={8}>
     <Booking/>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default DashBoard;