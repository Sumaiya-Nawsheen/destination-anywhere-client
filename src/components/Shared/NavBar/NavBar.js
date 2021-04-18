import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.jpg'
const NavBar = () => {
    return (
        <div>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="home"><img src={Logo} style={{height:'60px', width:'250px'}} alt=''/></Navbar.Brand>
               
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="admin">Admin</Nav.Link>
      
      <Nav.Link as={Link} to="/">Services</Nav.Link>
    </Nav>
   
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <div className="fa-2x mr-5">
      <FontAwesomeIcon icon={faSearchLocation} onClick={()=>console.log("clicked") }/>
      </div>
     <div className="fa-2x mr-5">
     <Link to="/login"><FontAwesomeIcon icon={faUser}/>
                </Link>
     </div>
      
      <Button as={Link} to="login" variant="outline-success">Book Destination</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
        </div>
    );
};

export default NavBar;