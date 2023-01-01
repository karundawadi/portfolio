import { Box, Typography } from "@mui/material"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import {RiSunFill, RiSunLine} from "react-icons/ri";
import { Link } from "react-router-dom";

function ProjectRow(props) {
    const dark_light =  props.dark ? "dark" : "light"
    return (
        <Navbar bg={dark_light} variant={dark_light} sticky="top">
            <div className="btn-group mx-auto">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link style={{
                            textDecoration:'none',
                            color:props.dark?"white":'black'
                        }} to="/article">
                            Articles
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{
                            textDecoration:'none',
                            color:props.dark?"white":'black'
                        }}
                        to="/project">
                            Projects
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{
                            textDecoration:'none',
                            color:props.dark?"white":'black'
                        }} 
                        to="/">
                            About Me
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Typography onClick={()=>{
                            props.changeMode(!props.dark)
                        }} color = {props.dark? "orange":"black"}><RiSunFill/></Typography> 
                    </Nav.Link>
                </Nav> 
            </div>
        </Navbar>
    )
}

export default ProjectRow 