import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';

import styled from 'styled-components'
import API from './Formu';


const BlackBox = styled.section`
    background: #0F0E17;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 600px;
    @media (max-width: 530px){
        margin-left: 0;
        padding-top: 0;
        padding-botton: 0;
        width: auto;
    }
`

const H1Title = styled.h1`
    font-size: 50px;
    color: white;
    @media (max-width: 530px){
        font-size: 45px;
    }
`
const DivStyle = styled.div`
    background: #FEB692;
    padding-top: 40px;
    padding-bottom: 40px;
`

const PStyle = styled.p`
    font-size: 22px;
    color: #FF8906;
    @media (max-width: 530px){
        font-size: 20px;
    }
`

function Contact() {
    return (
        <DivStyle>
            <BlackBox>
            <Container className="" fluid="sm" bg="dark" id="contact">
                <Row md={2} className="justify-content-center text-center">
                    <H1Title>Contacto</H1Title>
                </Row>
                <Row md={2} className="pt-3 justify-content-center">
                    <PStyle>Si esta interesado en trabajar conmigo en su proximo proyecto, no dude en ponerse en contacto.</PStyle>
                </Row>
                <API/>
            </Container>
            </BlackBox>
        </DivStyle>
    );
}

export default Contact;