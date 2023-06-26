import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Accueil</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Pokedex</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
