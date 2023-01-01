import React from "react"
import {Typography, Box, Container, useTheme, Grid } from "@mui/material"
import {Image} from 'react-bootstrap'

const professional_image = require('../../../assets/images/professional_image.jpg')

function Introduciton(){
    const breakPara = ()=>{return <Box sx={{paddingTop:'2%'}}/>}
    const year_months = ()=> {
        var months = Math.floor((Date.now() - new Date("2022-07-05")) / (1000*60*60*24*30));
        var years = Math.floor(months/ 12);
        months = months - years * 12;
        return years === 0 ? `${months} months` : `${years} years and ${months} months`;
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
                            Hey there!
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            {`My name is Karun Dawadi and I'm a software engineer who loves nothing more than diving 
                            into code and creating cool new projects. I recently graduated from the University of Texas at Arlington 
                            with a bachelor's degree in Computer Science and have been working in the tech industry for the past ${year_months()} months.
                            I've always been fascinated by software development and the endless possibilities it offers. 
                            That's why I've dedicated myself to learning as much as I can about the field and using my 
                            skills to create projects that push the boundaries of what's possible.`}
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            In my spare time, I also enjoy sharing my knowledge and insights through writing articles 
                            about technology and other topics. I hope you'll check out some of my work in the sections 
                            above and see for yourself the exciting things I'm working on.
                        </Typography>
                        {breakPara()}
                        <Typography variant="body1">
                            Thanks for stopping by!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Introduciton 