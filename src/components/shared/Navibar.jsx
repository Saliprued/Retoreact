import * as React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import logo from '../../img/logo.png'
import '../../styles/Home.css'
import '../../img/background.png'

const Navibar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
    <Container>
      <Navbar.Brand href="#home">
        <img className="d-inline-block align-top" src={logo}
          alt=""
          width="30"
          height="30"
         />{' '}
        El Mercader LTDA
       </Navbar.Brand>
        <Nav className="me-auto">
         <Nav.Link to='/' className="nav-link"> Inicio</Nav.Link>
         <Nav.Link to='/users' className="nav-link"> Usuarios</Nav.Link>
         <Nav.Link to='/products' className="nav-link"> Productos</Nav.Link>
         <Nav.Link to='/products' className="nav-link"> Ordenes</Nav.Link>
        </Nav>
        </Container>
    </Navbar> 

       
)
export default Navibar