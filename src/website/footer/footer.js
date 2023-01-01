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
                <Typography align="center" onClick={()=>{
                    window.open("/")
                }}>@Karun Dawadi</Typography>
                <LinkRow/>
                {breakPara("20px")}
            </Box>
        </Container>
    )
}

export default Footer 