import React from 'react'
import { Container, Box } from "@mui/material"
import Footer from "../footer/footer"
import Introduciton from '../bodyComponents/Introduction/introduction'
import Skills from '../bodyComponents/skills/Skills'
import NavigationBar from '../navbar/navigationBar'
import {Helmet} from "react-helmet";

function About(props) {
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>About Me</title>
            </Helmet>
            <Container maxWidth="md"> 
                <NavigationBar dark={props.dark} changeMode={props.changeMode}/>
                <Introduciton/>
                <Skills/>
                <Footer/>
            </Container>
        </Box>
    )
}

export default About