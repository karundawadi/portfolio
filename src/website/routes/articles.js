import React from 'react'
import { Container, Box, Typography, Paper } from "@mui/material"
import ProjectRow from "../navbar/project row/project_row"
import Footer from "../footer/footer"
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { TableRow, TableContainer, TableCell, Table } from '@mui/material';

function Articles(props) {
    const theme = useTheme()
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
                <Footer/>
            </Container>
        </Box>
    )
}

export default Articles