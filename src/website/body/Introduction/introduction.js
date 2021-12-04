import React from "react"
import {Typography, Box, Container, useTheme, Grid } from "@mui/material"
import {Image} from 'react-bootstrap'

function Introduciton(){
    const theme = useTheme()
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                        <Box sx={{
                            
                        }}>
                            <Image src="https://karundawadi.com/img/professional_image.jpg" thumbnail rounded />
                        </Box>
                    </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{
                    }}>
                        <Typography>
                            Hello World!
                        </Typography>
                        <Typography>
                            My name is Karun Dawadi. I am currently a junior pursuing a bachelor's degree in computer science at the University of Texas at Arlington. The University of Texas at Arlington is a school affilated with the UT System and is located at Arlington, Texas.
                        </Typography>
                        <Typography>
                            I am very interested in Software developement and based on this intrest I am done various projects, which I have attached in the next section.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Introduciton 