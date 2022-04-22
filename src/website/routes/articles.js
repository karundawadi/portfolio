import React from 'react'
import { Container, Box, Typography, Paper } from "@mui/material"
import NavigationBar from "../navbar/navigationBar"
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
                <NavigationBar dark={props.dark} changeMode={props.changeMode}/>
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