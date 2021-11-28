import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
function ProjectRow(params) {
    return (
        <Navbar bg="light" sticky="top">
            <div className="btn-group mx-auto">
                <Nav className="me-auto">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Contact Me</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    )
}

export default ProjectRow 