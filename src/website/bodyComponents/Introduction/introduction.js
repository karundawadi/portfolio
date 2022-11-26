import React from "react"
import {Typography, Box, Container, useTheme, Grid } from "@mui/material"
import {Image} from 'react-bootstrap'

const professional_image = require('../../../assets/images/professional_image.jpg')

function Introduciton(){
    const theme = useTheme()
    const breakPara = ()=>{return <Box sx={{paddingTop:'2%'}}/>}
    const year_months = ()=> {
        var months = Math.floor((Date.now() - new Date("2022-07-05")) / (1000*60*60*24*30));
        var years = Math.floor(months/ 12);
        months = months - years * 12;
        return years == 0 ? `${months} months` : `${years} years and ${months} months`;
    }
    return (
        <Container style={{
            paddingTop:4
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box sx={{
                        
                    }}>
                        <Image src={professional_image} fluid rounded/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{
                    }}>
                        <Typography variant="body1">
                            Hello, world!
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            {`I am Karun Dawadi and I am currently working as a Software Engineer. I graduated with a bachelor's degree in Computer Science from the University of Texas at Arlington in May 2022. I have been in the tech industry for ${year_months()}.`} 
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            My interest in software development has led me to work on a few projects, which can be found in the project section above. In addition, I write articles about technology and various other topics, which can be found in the articles section.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Introduciton 