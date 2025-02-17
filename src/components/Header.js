// src/components/Header.js
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import './Header.css';

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  console.log(window.scrollY);
  if (window.scrollY > 0) {
      nav.classList.add('blurred');
  } else {
      nav.classList.remove('blurred');
  }
});


const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container className='d-flex'>
        <Navbar.Brand className='text-light'>TP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' as={NavLink} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link className='text-light' as={NavLink} to="/about">
              À propos de moi
            </Nav.Link>
            <Nav.Link className='text-light' as={NavLink} to="/project">
              Projets
            </Nav.Link>
            <Nav.Link className='text-light' as={NavLink} to="/CV">
              Mon CV
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
