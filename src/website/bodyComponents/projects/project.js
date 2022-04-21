import React from "react"
import ProjectTemplate from "./projectTemplate"
import {Typography, Box, Container, useTheme } from "@mui/material" 
import ModalTemplate from "./Template/modal_template"

function boxStylesCuston(theme){
    return {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        display: 'flex',
        justifyContent:'center',
    }
}

function AddTypography(values){
    return (
        <Typography>
            {values.text}
        </Typography>
    )
}

function Project(){
    const theme = useTheme()
    return (
        <Container>
            <Box sx={{
                paddingTop:2
            }}>
                <Typography paddingLeft={1} variant="h6">Here are some of my open source projects.</Typography>
                <Box sx={boxStylesCuston(theme)}>
                    <ProjectTemplate 
                        LanguagesUsed = "Python, C, C++"
                        projectTitle = "DaveCash"
                        shortDescription = "A financial Application"
                        actualDescription = "You already know what this is"
                        gitHubLink = "https://github.com/karundawadi/WTWT"
                        imageLink = "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
                        imagealt = "Google"
                        modalDescription = {
                            <ModalTemplate 
                                descripton = "Enter the description. Make sure the description is a bit longer than the actual website. "
                                steps={
                                    <ol>
                                        <li>
                                            <AddTypography text="Step 1"/>
                                        </li>
                                        <li>
                                            <AddTypography text="Step 2"/>
                                        </li>
                                        <li>
                                            <AddTypography text="Step 3"/>
                                        </li>
                                        <li>
                                            <AddTypography text="Step 4"/>
                                        </li>
                                    </ol>
                                }
                                userStories={
                                    <ul>
                                        <li>
                                            <AddTypography text="Feature one"/> 
                                            <ul> 
                                                <li>Sub-description of the feature </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Feature two 
                                        <ul>
                                            <li>Sub-description of the feature </li>
                                            </ul>
                                        </li>
                                    </ul>
                                }
                                image1="https://images.unsplash.com/photo-1603937606336-89e39e67d32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80"
                                image1Alt="Hello?"
                                image2 = "https://s3.studytonight.com/curious/uploads/pictures/1632120146-79542.gif"
                                image2Alt="Again?"
                                videoLink = "https://www.youtube.com/embed/tgbNymZ7vqY"
                                dependencies= {["Python","C"]}
                            />
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