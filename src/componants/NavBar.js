import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import '../styles/NavBar.css'

export default function NavBar() {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand id='navbarBrand' href='#'>WatchIt!</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav 
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px'}}
            navbarScroll>
              <Nav.Link id='watchLink' href='#' className=''>My Watchlist</Nav.Link>
              <NavDropdown title='Genre' id="navbarGenre">
                <NavDropdown.Item href='#'> Action </NavDropdown.Item>
                <NavDropdown.Item href='#'> Animation </NavDropdown.Item>
                <NavDropdown.Item href='#'> Comedy </NavDropdown.Item>
                <NavDropdown.Item href='#'> Drama </NavDropdown.Item>
                <NavDropdown.Item href='#'> Horror </NavDropdown.Item>
                <NavDropdown.Item href='#'> Romance </NavDropdown.Item>
                <NavDropdown.Item href='#'> Thriller </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id='helloMessage' href='#' disabled> Hello,  ! </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control id='formSearch' type='search' className='me-2' aria-label='Search' />
            <Button id='btnSearch' variant='outline-success'> Search </Button>
          </Form>
          <Nav 
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px'}}
            navbarScroll>
              <NavDropdown title='Profile' id='navbarProfil'>
                <NavDropdown.Item href='#'> See Profil </NavDropdown.Item>
                <NavDropdown.Item href='#'> Modify Profil </NavDropdown.Item>
                <NavDropdown.Item href='#'> Delete Profil </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id='navBarlogOut' href='#'>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
