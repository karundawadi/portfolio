import React from "react"
import { Container, Box } from "@mui/material"
import NavigationBar from "./navbar/navigationBar"
import Body from "./body/body"
import Footer from "./footer/footer"
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main:'#647c2e', 
            // For the color of buttons
        },
    },
});

function WebSite() {
    return (
        <ThemeProvider theme={theme}>
            <Box style={{
            }}>
                <Container maxWidth="md"> 
                    <NavigationBar/>
                    <Body/>
                    <Footer/>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default WebSite