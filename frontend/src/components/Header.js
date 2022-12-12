import React from 'react'
import { Container, Navbar, Nav, Row, FormControl} from 'react-bootstrap'


function Header() {
  return (
   <header>
     {/* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
      <Navbar.Brand href='/'>
        ProShop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mr-auto'>
          <Nav.Link href='/cart'><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          <Nav.Link href='/login'><i className='fas fa-user'></i>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  );
}

export default Header