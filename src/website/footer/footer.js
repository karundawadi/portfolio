import React from "react"
import {Typography, Box, Container } from "@mui/material"
import LinkRow from "../navbar/link_row/link_row"

function Footer(){
    return (
        <Container>
            <Box sx={{
                paddingTop:2,
                alignText:'center'
            }}>
                <Typography align="center">@Karun Dawadi</Typography>
                <LinkRow/>
            </Box>
        </Container>
    )
}

export default Footer 