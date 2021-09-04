import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import styled from 'styled-components'

const PStyle = styled.p`
    font-size: 22px;
    color: #325288;
    @media (max-width: 530px){
        font-size: 20px;
    }
`


function Formu() {
    const [state, handleSubmit] = useForm("mbjqdnve");
    if (state.succeeded) {
        return <PStyle className="alert alert-success text-center">Gracias Por Contactarme!, te respondere en poco tiempo.</PStyle>;
    }
    return (
        <Row md={2} className="pt-4 justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="pt-2" controlId="formBasicText">
                    <Form.Control id="name" name="name" type="text" placeholder="Nombre Completo" />
                </Form.Group>
                <Form.Group className="pt-2" controlId="formBasicEmail">
                    <Form.Control id="email" name="email" type="Email" placeholder="Correo Electronico" />
                </Form.Group>
                <Form.Group className="pt-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Control id="message" name="message" as="textarea" rows={3} placeholder="Mensaje" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button className="mt-3" variant="warning" type="submit" disable={state.submitting}>
                        Enviar
                    </Button>
                </div>

            </Form>
        </Row>

    );
}
function API() {
    return (
        <Formu/>
    );
}

export default API;