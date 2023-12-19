import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = ()=> {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">CodeByAbdullah</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '300px' }} navbarScroll>
                        <Nav.Link ><Link to={"/"}>Home</Link></Nav.Link>
                        <Nav.Link ><Link to={"/About"}>About</Link></Nav.Link>
                        <Nav.Link ><Link to={"/Contact"}>Contact</Link></Nav.Link> 
                    </Nav>
        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>This is Header</h1>
        </>
    )
}