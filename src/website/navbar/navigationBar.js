import React from "react"
import { Container,Box, Typography, Grid } from "@mui/material"
import ProjectRow from "./project row/project_row"
import LinkRow from "./link_row/link_row"
import {RiSunFill, RiSunLine} from "react-icons/ri";
import { useTheme } from "@emotion/react";
function NavigationBar(props) {
    const theme = useTheme()
    return (
        <Container>
            <Box component="span" sx={{ 
                paddingTop:2,
                display: 'block', 
                textAlign:'center',
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography 
                        variant="h2" 
                        onClick={()=>{
                            window.open("/","_self")
                        }} 
                        fontWeight={335} 
                        >Karun Dawadi</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectRow dark={props.dark} changeMode={props.changeMode}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LinkRow/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default NavigationBar