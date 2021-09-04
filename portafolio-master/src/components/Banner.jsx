import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

const ImgStyled = styled.img`
    width: 100%;
    heigt: auto;
`
const H1Title = styled.h1`
    font-size: 60px;
    color: white;
    position: absolute;
    text-shadow: 2px 2px #000000;
    @media (max-width: 420px){
        font-size: 25px;
    }
`

function Banner() {
    return (
        <>
            <H1Title>Parece magia, pero es código...</H1Title>
            <ImgStyled src="https://i.ibb.co/6vGrxNx/cabecera-1024x576-x1x-jpg-667465578.jpg"/>
        </>
    );
}

export default Banner;