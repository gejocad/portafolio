import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const DivStyle = styled.div`
    background: #0F0E17; 

`
const H1Title = styled.h1`
    font-size: 55px;
    color: white;
    @media (max-width: 420px){
        font-size: 50px;
    }
`
const PStyle = styled.p`
    font-size: 20px;
    color: #FF8906;
    @media (max-width: 420px){
        font-size: 18px;
    }
`

function Welcome() {
  return (
    <DivStyle>
      <div className="welcome-section" id="welcome-section">
        <Container fluid>
            <Row className="align-items-center row-reverse">
                <Col sm={6} className="pt-4 ps-5">
                    <H1Title>Mucho gusto en conocerle, me llamo Gerald</H1Title>
                    <PStyle>Mi pasión es diseñar y desarrollar soluciones digitales que satisfagan las necesidades del dia a dia de mis clientes.</PStyle>
                </Col>
                <Col sm={6} className="p-2"><img className="img-fluid p-5" src="https://i.ibb.co/PrPjNCD/IMG-20210415-093021030-2.jpg" alt="" /></Col>
            </Row>
        </Container>
      </div>
    </DivStyle>
  );
}

export default Welcome;