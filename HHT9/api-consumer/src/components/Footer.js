import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-3">
        <div className="text-center">
          © {new Date().getFullYear()} RUDY ALEXANDER SOTO ROSIL  9490-20-387 SECCION A
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
