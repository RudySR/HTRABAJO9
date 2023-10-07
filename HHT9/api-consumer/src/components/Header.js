import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/data-list">Lista de Películas</Nav.Link>
        <Nav.Link href="/about">Acerca de</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
