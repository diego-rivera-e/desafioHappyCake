import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



function NavBarTop()
{
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
            <Container>
                <Navbar.Brand href="#home"> 🍰  Happy Cake</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className= "ms-auto">
                    <Link to="/desafiohappycake/" className='m-auto px-2 text-white text-decoration-none'> 🏡 Home </Link>
                    <Link to="/contacto/" className='m-auto px-2 text-white text-decoration-none'> 📒 Contacto </Link>
                    </Nav>
                 </Navbar.Collapse> 
                
            </Container>
        </Navbar>
  
    
    )
    

}
export default NavBarTop;