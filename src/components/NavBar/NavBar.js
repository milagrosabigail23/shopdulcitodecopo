import React , {Component} from "react"
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import "./NavBar.css"
import {  Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default class NavbarComp extends Component {
    render() {
        return ( 
            <div className="headerNav">
            <Navbar bg="light" expand="lg">
    <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Link to='/'style={{textDecoration:'none'}}>
                Shop Dulcito de Copo 
                </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Nosotros</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
            <Link to={`/item/1`} style={{textDecoration:'none'}} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >Copos en frasco de vidrio</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <Link to={`/item/2`} style={{textDecoration:'none'}} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} > Copos con bolsa </Link> 
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
            <Link to={`/item/3`} style={{textDecoration:'none'}} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >  Copos envasados </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            <Link to={`/item/4`} style={{textDecoration:'none'}} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >  Alquiler de máquina copera </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
            <Link to={`/item/5`} style={{textDecoration:'none'}} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >  Alquiler de máquina pochoclera </Link>
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  <CartWidget/>
            </div>
            
        )
        }
    }

