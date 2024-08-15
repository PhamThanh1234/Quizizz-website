import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {  NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       
        <NavLink className='navbar-brand' to="/">Quzizz</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink to="/users"  className='nav-link'>Users</NavLink>
            <NavLink to="/admins"  className='nav-link'>Admin</NavLink>
            
          </Nav>
          <Nav>
          <button className="btn-login">Log in</button>
          <button className="btn-signin">Sign up</button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;