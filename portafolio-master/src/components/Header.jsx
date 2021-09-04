import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const DivStyle = styled.div`
    background: #0F0E17; 
`

function Header() {
  return (
    <DivStyle>
      <div className="navigationBar ">
        <Container fluid>
          <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
          <img className="inline-block align-top" src="https://i.ibb.co/QfjG7Lg/m-pixlr-bg-result-1-1.png" width="60" height="60" alt="" />
            <Navbar.Brand href="#home" className="ms-5">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="align-text-bottom">
                <Nav.Link href="#inicio" className="ms-2">Inicio</Nav.Link>
                <Nav.Link href="#proyectos" className="ms-2">Proyectos</Nav.Link>
                <Nav.Link href="#testimonios" className="ms-2">Testimonios</Nav.Link>
                <Nav.Link href="#contacto" className="ms-2">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form inline className="d-flex" >
                <Button variant="warning" className="ms-2">Descargar Curriculum</Button>
              </Form>
          </Navbar>
        </Container>
      </div>
    </DivStyle>
  );
}

export default Header;
