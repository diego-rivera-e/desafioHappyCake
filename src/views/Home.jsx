import Container from 'react-bootstrap/Container';
import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home() {
return (
    <Container className='text-center'>
        <Row>
            <Col className='mt-5'>
                <h1 className='fw-normal'>Bienvenidos a <span className='fw-semibold'>Happy Cake</span></h1>
                <p className='fs-5'>El lugar de los pasteles felices</p>
                <p className='cake'>🎂</p>
            </Col>
        </Row>
    </Container>
)
}

export default Home