import React from "react"
import Project from "./projects/project"
import Introduciton from "./Introduction/introduction"
import Skills from './Skills/skills'
import { Box, Container} from "@mui/material"


function Body(){
    return (
        <Container>
            <Box sx={{
                paddingTop:2
            }}>
                <Introduciton/>
                <Skills/>
                <Project/>
            </Box>
        </Container>
        
    )
}
export default Body