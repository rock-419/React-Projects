"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"

function Header() {
  const router = useRouter()
  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    const updateCart = () => {
      const count = localStorage.getItem("cartCount")
      setCartCount(count ? parseInt(count) : 0)
    }

    window.addEventListener("storage", updateCart)
    updateCart()

    return () => window.removeEventListener("storage", updateCart)
  }, [])

  return (
    <Navbar expand='lg' className='bg-white px-6 py-2 border-b border-gray-200'>
      <Container>
        <Navbar.Brand href='#home' className='text-black text-sm'>
          Sports
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='border-gray-300'
        />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto gap-4 ml-6 text-sm'>
            <Nav.Link
              href='#home'
              className='text-black hover:text-gray-700 transition'
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#about'
              className='text-black hover:text-gray-700 transition'
            >
              My Top 16
            </Nav.Link>
            <NavDropdown
              title='Choose'
              id='basic-nav-dropdown'
              className='text-black hover:text-gray-700 transition'
            >
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
        <button
          className='text-black text-sm'
          onClick={() => router.push("/login")}
        >
          Log In
        </button>
        <div className='relative ml-2'>
          <button className='text-black text-sm border px-3 py-1 rounded'>
            Cart
          </button>
          {cartCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {cartCount}
            </span>
          )}
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
