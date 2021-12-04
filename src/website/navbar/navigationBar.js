import React from "react"
import { Container,Box, Typography, Grid } from "@mui/material"
import ProjectRow from "./project row/project_row"
import LinkRow from "./link_row/link_row"

function NavigationBar() {
    return (
        <Container>
            <Box component="span" sx={{ 
                paddingTop:2,
                display: 'block', 
                textAlign:'center',
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h2" onClick={()=>{
                            window.open("/","_self")
                        }}>Karun Dawadi</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectRow/>
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