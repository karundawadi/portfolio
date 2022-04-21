import React from 'react'
import { Container, Box } from "@mui/material"
import NavigationBar from "../navbar/navigationBar"
import Footer from "../footer/footer"
import Project from '../bodyComponents/projects/project'
import {Helmet} from "react-helmet";

function Projects(props) {
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>Projects</title>
            </Helmet>
            <Container maxWidth="md"> 
                <NavigationBar dark={props.dark} changeMode={props.changeMode}/>
                <Project/>
                <Footer/>
            </Container>
        </Box>
    )
}

export default Projects