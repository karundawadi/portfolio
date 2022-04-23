import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import ProjectRow from "../navbar/project row/project_row"
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
                <Typography 
                    variant="h2" 
                    onClick={()=>{
                        window.open("/","_self")
                    }} 
                    fontWeight={335} 
                    align={'center'}
                    >Karun Dawadi</Typography>
                <ProjectRow dark={props.dark} changeMode={props.changeMode}/>
                <Project/>
                <Footer/>
            </Container>
        </Box>
    )
}

export default Projects