import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'


const PlStyle = styled.p`
    color: white;
margin-top: 25px;
position:absolute;
transform: translateX(-60%);
`
const DivStyle = styled.div`
    background: #0F0E17; 
    display: flex;
    flex-direction: row;
`
const Img = styled.img`
margin-top: 15px;
margin-bottom: 5px;
`




const Footer = () => {
    return (
        <DivStyle className="justify-content-md-center ">
            <Container>
            <Img className="inline-block align-top" src="https://i.ibb.co/QfjG7Lg/m-pixlr-bg-result-1-1.png" width="60" height="60" alt="" />
                </Container>
            <Container>
                <Row>
                    <Col>
                    <PlStyle>Copyright 2021 - Todos los derechos reservados.</PlStyle>
                    </Col>
                </Row>
            </Container>

        </DivStyle>
    )
}

export default Footer
