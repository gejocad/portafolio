import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';

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
    font-size: 22px;
    color: #FF8906;
    @media (max-width: 420px){
        font-size: 20px;
    }
`
const Testy = styled.p`
    font-size: 22px;
    color: white;
    @media (max-width: 420px){
    font-size: 20px;
    }
`

const Testimonials = () => {
    return (
        <DivStyle>
            <Container className="pt-5 pb-5 ps-4">
                <Row>
                    <H1Title>Testimonios</H1Title>
                </Row>
                <Row>
                <div>
            <Container>
                <Row className="justify-content-md-center pt-3">
                    <Col sm={4}>
                        <PStyle><img className="rounded rounded-circle" src="https://i.ibb.co/cJrYtjc/user2.jpg" alt="" /> Genesis Bracho</PStyle>
                        <Testy>Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Gerald y como utiliza Javascript en el día a día.</Testy>
                    </Col>
                    <Col sm={4}>
                        <PStyle><img className="rounded rounded-circle" src="https://i.ibb.co/bvbWSD0/user1.jpg" alt="" /> Saida Acosta</PStyle>
                        <Testy>Gerald ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.</Testy>
                    </Col>
                    <Col sm={4}>
                        <PStyle><img className="rounded rounded-circle" src="https://i.ibb.co/ZW31yTb/user3.jpg" alt="" /> Cergio Aparicio</PStyle>
                        <Testy>La forma como explica y trabaja los temas Gerald, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS. </Testy>
                    </Col>
                </Row>
            </Container>
        </div>
                </Row>           
            </Container>
        </DivStyle>
    )
}

export default Testimonials
