import React from "react"
import {Typography, Box, Container } from "@mui/material"
import LinkRow from "../navbar/link_row/link_row"

function Footer(){
    const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
    return (
        <Container>
            <Box sx={{
                paddingTop:2,
                alignText:'center'
            }}>
                <Typography 
                    variant="subtitle1"
                    align="center" 
                    onClick={()=>{
                        window.open("/")
                    }}
                    sx={{
                        fontWeight: 500,
                        cursor: 'pointer',
                        color: 'text.primary',
                        letterSpacing: '0.02em',
                        '&:hover': {
                            color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                        }
                    }}
                >@Karun Dawadi</Typography>
                <LinkRow/>
                {breakPara("20px")}
            </Box>
        </Container>
    )
}

export default Footer 