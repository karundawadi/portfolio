import React from "react"
import {Typography, Box, Container, useTheme, Card, CardActions, CardContent, CardMedia, Button } from "@mui/material" 
import TemplateCard from "./Template/template_card"

function boxStylesCuston(theme){
    return {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        display: 'flex',
        paddingTop:'2%'
    }
}

function Project(){
    const theme = useTheme()
    return (
        <Container>
            <Box sx={{
                paddingTop:2
            }}>
                <Typography variant="h6">
                    Few of my open source projects. Find all my other projects on <span  
                    onClick={()=>{
                        window.open("https://github.com/karundawadi")
                    }}
                    style={{
                        color:'green',
                        textDecoration:'underline'
                    }}
                    >Github</span>
                </Typography>

                <Box sx={{
                    ...boxStylesCuston(theme),
                }}>
                    <TemplateCard 
                            LanguagesUsed={"TypeScript, React Native"} 
                            projectTitle={'SaveCash'}
                            shortDescription={"Mobile application designed to make managing money easier."}
                            actualDescription={"SaveCash is an open source mobile application designed to make managing money easier.It does all this within your device allowing you to worry less about privacy and focus more on your finances."}
                            gitHubLink = {'https://github.com/karundawadi/SaveCash'}
                            imageLink = {require('../projects/projects_list/SaveCash/savecash.png')}
                            imagealt = {'Landing Page'}
                        />
                        
                    
                    <TemplateCard 
                        LanguagesUsed={"Python, JavaScript, HTML, CSS, React"} 
                        projectTitle={'WTWT'}
                        shortDescription={"A web application that recommends movies."}
                        actualDescription={"What to watch tonight is a movie recommendation system that uses collaborative filtering algorithms to suggest movies to users."}
                        gitHubLink = {'https://github.com/karundawadi/WTWT'}
                        imageLink = {require('../projects/projects_list/WTWT/WTWT.png')}
                        imagealt = {'WTWT live demo'}
                    />
                    
                    <TemplateCard 
                        LanguagesUsed={"Python"} 
                        projectTitle={'Robotic Arm'}
                        shortDescription={"A Lego robot capable of drawing complex shapes."}
                        actualDescription={"Robotic Arm utilized inverse kinematics to estimate the points required to draw a shape. Then, it used the motors to draw the actual shape."}
                        gitHubLink = {'https://github.com/karundawadi/roboticArm'}
                        imageLink = {require('../projects/projects_list/RoboticArm/roboticarm.jpg')}
                        imagealt = {'WTWT live demo'}
                    />
                </Box>
            </Box>
        </Container>
    )
}
export default Project