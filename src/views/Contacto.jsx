import Container from 'react-bootstrap/Container';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';


function Contacto() {
    return (
        <Container>
            <Row>
                <Col className='mt-5'>
                    <h1 className='text-center'>Cuentanos, ¿en que te podemos ayudar??</h1>
                    <div className='mt-4 form-custom m-auto'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="form1">Ingresa tu correo electronico</InputGroup.Text>
                            <Form.Control
                                placeholder="tucorreo@example.com"
                                aria-label="usuario"
                                aria-describedby="form1"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Descripcion</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <div className='w-50 d-flex justify-content-center mt-3'>
                            <Button variant="danger">Enviar</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacto