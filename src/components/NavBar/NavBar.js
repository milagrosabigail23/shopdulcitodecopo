import React , {Component} from "react"
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"
//import { NavLink , Link } from "react-router-dom"

export default class NavbarComp extends Component {
    render() {
        return ( 
            <div>
            <Navbar bg="light" expand="lg">
    <Container>
                <Navbar.Brand href="#home">Dulcito de Copo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Dulces personalizados</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Servicio Candy Bar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Copos y Pochoclos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Alquiler de máquina copera y pochoclera
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    <CartWidget />
            </div>
            
        )
        }
    }

