import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import ProjectRow from "../navbar/project row/project_row"
import Footer from "../footer/footer"
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { TableRow, TableContainer, TableCell, Table } from '@mui/material';

function Articles(props) {
    const navigate = useNavigate()
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>Articles</title>
            </Helmet>
            <Container maxWidth="md"> 
                <Typography 
                    variant="h2" 
                    onClick={()=>{
                        window.open("/","_self")
                    }} 
                    fontWeight={335} 
                    align={'center'}
                    >Karun Dawadi</Typography>
                <ProjectRow dark={props.dark} changeMode={props.changeMode}/>
                <Box sx={{paddingTop:'2%'}}></Box>
                <Typography variant="h6">2022</Typography>
                <TableContainer sx={{
                }}>
                    <Table>
                        {/* First Artilce */}
                        <TableRow 
                            hover 
                            onClick={()=>{
                                navigate("timeBasedMaintanence")
                            }}
                        >
                            <TableCell align="left">Time Based Maintanence</TableCell>
                            <TableCell align="right">April 20</TableCell>
                        </TableRow>
                        
                    </Table>
                </TableContainer>
                
                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="h6">2019</Typography>
                <TableContainer sx={{
                }}>
                    <Table>
                        <TableRow 
                            hover 
                            onClick={()=>{
                                navigate("canSpam")
                            }}
                        >
                            <TableCell align="left">Can Spam Act of 2003</TableCell>
                            <TableCell align="right">Feburary 20</TableCell>
                        </TableRow>
                        <TableRow 
                            hover 
                            onClick={()=>{
                                navigate("insideOut")
                            }}
                        >
                            <TableCell align="left">What is inside the mind of a 11-year old?</TableCell>
                            <TableCell align="right">January 21</TableCell>
                        </TableRow>
                        <TableRow 
                            hover 
                            onClick={()=>{
                                navigate("problemsWithPlastic")
                            }}
                        >
                            <TableCell align="left">The problems with plastic and how to solve them</TableCell>
                            <TableCell align="right">January 19</TableCell>
                        </TableRow>
                        
                    </Table>
                </TableContainer>
                <Footer/>
            </Container>
        </Box>
    )
}

export default Articles