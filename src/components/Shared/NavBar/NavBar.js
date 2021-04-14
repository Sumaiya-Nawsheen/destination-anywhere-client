import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="home">Destination Anywhere</Navbar.Brand>
               
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="hiking">Hiking</Nav.Link>
      <NavDropdown title="Tours" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.2" >Another action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="trekking" >Trekking</Nav.Link>
      <Nav.Link as={Link} to="camping">Camping</Nav.Link>
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
      
      <Button variant="outline-success">Book Destination</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
        </div>
    );
};

export default NavBar;