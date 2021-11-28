import React from "react"
import { Container } from "@mui/material"
import NavigationBar from "./navbar/navigationBar"
import Body from "./body/body"
import Footer from "./footer/footer"

function WebSite() {
    return (
        <Container maxWidth="md"> 
            <NavigationBar/>
            <Body/>
            <Footer/>
        </Container>
    )
}

export default WebSite