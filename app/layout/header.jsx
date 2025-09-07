"use client"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaBasketball } from "react-icons/fa6"

function Header() {
  return (
    <Navbar expand='lg' className='bg-gray-700'>
      <Container>
        <Navbar.Brand href='#home'>
          <FaBasketball />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>My Top 15</Nav.Link>
            <NavDropdown title='Choose' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                LeBRON RAYMONE JAMES SR.
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                MICHEAL JEFFREY JORDAN
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                KAREEM ABDUL-KABBAR
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                TIMOTHY THEODORE DUNCAN
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                SHAQUILLE RASHUAN O'NEAL
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
