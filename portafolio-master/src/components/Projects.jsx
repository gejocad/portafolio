import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Div1 = styled.div`
    width: auto;
    height: auto;
    margin-top: 80px;
    bottom: 130px;
    left: 15px;
    position: relative;
    @media (max-width: 540px){
        width: 100%;
        height: 100%;
        margin-top: 50%;
        bottom: 170px;
        left: 15px;
    }
`

const Div2 = styled.div`
    background: #0F0E17;
    width: 280px;
    height: 230px;
    top: 67%;
    right: 40%;
    position: absolute;
    @media (max-width: 540px){
        width: 90%;
        height: 100%;
        top: 55%;
        right: 8%;
    }
`

const ImgStyle = styled.img`
    background: gray;
    width: 630px;
    height: 445px;
    bottom: 150px;
    left: 0;
    @media (max-width: 540px){
        width: 100%;
        height: auto;
        bottom: 0;
        left: 0;
    }
`

const DivStyle = styled.div`
    background: white;
    bottom: 150px; 
`
const H1Title = styled.h1`
    font-size: 55px;
    color: #0F0E17;
    @media (max-width: 420px){
        font-size: 50px;
    }
`
const H1Title2 = styled.h1`
    font-size: 25px;
    color: white;
    margin-left: 25px;
    margin-top: 25px;
    @media (max-width: 420px){
        font-size: 20px;
    }
`
const PStyle = styled.p`
    font-size: 22px;
    color: #0F0E17;
    @media (max-width: 540px){
        font-size: 20px;
    }
`
const PStyle2 = styled.p`
    font-size: 20px;
    color: #FFF8F6;
    margin-left: 15px;
    margin-top: 15px;
    @media (max-width: 540px){
        font-size: 18px;
    }
`

function Projects() {
    return (
        <div className="projects" id="projects">
          <DivStyle>
      <div className="top-projects">
        <Container fluid className="pt-2">
            <Row className="align-items-center">
                <Col  className="p-5">
                    <H1Title>¡Proyectos en vanillaJs!</H1Title>
                </Col>
                <Col sm={6} className="p-5">
                    <PStyle><strong>Estos son mis ultimos poryectos realizados en html, css y vanillaJs, Espero le guste mucho.</strong></PStyle>
                </Col>
            </Row>
        </Container>
      </div>
    </DivStyle>
            <Container fluid className="mt-3 d-flex justify-content-center">
                <Row className="align-items-center">
                    <Col sm={6} className="">
                        <Div1>
                            <ImgStyle src="https://imagizer.imageshack.com/img923/7315/mTFUQw.png" />
                            <Div2>
                                <H1Title2>Adopta una mascota</H1Title2>
                                <PStyle2>Vive la hermosa experiencia de tener un amigo de cuatro patas.</PStyle2>
                                <a className="btn btn-warning ms-4" href="https://gejocad.github.io/Sprint-1/">Ir a proyecto</a>
                            </Div2>
                        </Div1>
                    </Col>
                    <Col sm={6} className="">
                        <Div1>
                            <ImgStyle src="https://i.ibb.co/DGkfrCj/DB-main.jpg" />
                            <Div2>
                                <H1Title2>Aprendamos a programar</H1Title2>
                                <PStyle2>Fortelece tus conocimientos de programacion.</PStyle2>
                                <a className="btn btn-warning ms-4" href="https://gejocad.github.io/DailyBits/">Ir a proyecto</a>
                            </Div2>
                        </Div1>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    );
}

export default Projects;
