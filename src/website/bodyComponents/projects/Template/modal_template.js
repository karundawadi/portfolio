import React from "react"
import { Box, Container, Typography, Grid  } from "@mui/material"

function ModalTemplate(props){
    
    return (
        <Box>

            <Typography variant="body1">{props.descripton}</Typography>

            <Box sx={{paddingBottom:1}}/> 

            <Typography variant="h6">Steps to run</Typography>

            
            {props.steps}
            

            <Typography variant="h6">User stories</Typography>
            
            {props.userStories}

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            src={props.image1}
                            alt={props.image1Alt}
                            loading="lazy"
                            style={{
                                width:'100%',
                                maxHeight:'500px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <img
                                src={props.image2}
                                alt={props.image2Alt}
                                style={{
                                    width:'100%',
                                    maxHeight:'500px'
                                }}
                                loading="lazy"
                        />
                    </Grid>
                </Grid>
            </Container>
            
            <Box sx={{paddingBottom:1}}/> 

            <Typography variant="h6">Demo Video</Typography>
                <iframe width="100%" height="400"
                    src={props.videoLink}>
                </iframe>
            
            <Typography variant="h6">Dependencies</Typography>
            
            <ul>
                {props.dependencies.map((item,index) => ( 
                    <li><Typography variant="body1">{item}</Typography></li>
                ))}
            </ul>
            
            
            <Box sx={{paddingBottom:1}}/> 
            
        </Box>
    )
}
export default ModalTemplate