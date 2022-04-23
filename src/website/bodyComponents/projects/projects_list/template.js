import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../../footer/footer"
import ProjectRow from '../../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { useTheme } from '@emotion/react';

function WTWT(props) {
  const breakPara = ()=>{return <Box sx={{paddingTop:'4%'}}/>}
  const theme = useTheme()
  const navigate = useNavigate()
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>{props.title}</title>
            </Helmet>
            <Container maxWidth="md">
                <Typography 
                  variant="h3" 
                  onClick={()=>{
                      window.open("/","_self")
                  }} 
                  fontWeight={335} 
                  align={'center'}
                  >Karun Dawadi</Typography> 
                <ProjectRow dark={props.dark} changeMode={props.changeMode}/>
                
                <Footer/>
            </Container>
        </Box>
    )
}

export default WTWT