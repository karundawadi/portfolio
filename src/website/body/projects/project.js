import React from "react"
import ProjectTemplate from "./projectTemplate"
import {Typography, Box, Container, useTheme } from "@mui/material" 

function boxStylesCuston(theme){
    return {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        display: 'flex',
        justifyContent:'center',
    }
}

function Project(){
    const theme = useTheme()
    return (
        <Container>
            <Box sx={{
                paddingTop:2
            }}>
                <Box sx={boxStylesCuston(theme)}>
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                </Box>
                <Box sx={boxStylesCuston(theme)}>
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                    
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "SaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <Box>
                                {/* Enter contents here  */}
                            </Box>
                        }
                    />
                </Box>
            </Box>
        </Container>
    )
}
export default Project