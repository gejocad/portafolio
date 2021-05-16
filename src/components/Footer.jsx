import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'


const PlStyle = styled.p`
    color: white;
    align-content: left;

`
const DivStyle = styled.div`
    background: #0F0E17; 
`




const Footer = () => {
    return (
        <DivStyle>
            <Container>
                <Row className="justify-content-md-center ">
                    <Col>
                    <img className="inline-block align-top" src="https://i.ibb.co/QfjG7Lg/m-pixlr-bg-result-1-1.png" width="60" height="60" alt="" />
                    <PlStyle>Copyright 2021 - Todos los derechos reservados.</PlStyle>
                    </Col>
                </Row>
            </Container>

        </DivStyle>
    )
}

export default Footer
