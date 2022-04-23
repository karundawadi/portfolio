import React from "react"
import {Typography, Box, Container, useTheme, Grid } from "@mui/material"
import {Image} from 'react-bootstrap'

function Introduciton(){
    const theme = useTheme()
    const breakPara = ()=>{return <Box sx={{paddingTop:'2%'}}/>}
    return (
        <Container style={{
            paddingTop:4
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box sx={{
                        
                    }}>
                        <Image src="https://raw.githubusercontent.com/karundawadi/portfolio/a52470dc749904c580796fdd8789b87b3b7a4247/img/professional_image.jpg" fluid rounded/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{
                    }}>
                        <Typography variant="body1">
                            Hello World!
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            My name is Karun Dawadi. I am currently a graduating senior pursuing a bachelor's degree in computer science at the University of Texas at Arlington. The University of Texas at Arlington is a school affilated with the UT System and is located at Arlington, Texas.
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            I am very interested in Software developement and based on this intrest I am done various projects, which can be found in the projects section.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Introduciton 