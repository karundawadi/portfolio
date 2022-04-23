import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { useTheme } from '@emotion/react';

function TimeBasedMaintanence(props) {
  const breakPara = ()=>{return <Box sx={{paddingTop:'4%'}}/>}
  const theme = useTheme()
  const navigate = useNavigate()
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>{props.title}</title>
              <script src="https://giscus.app/client.js"
                  data-repo="karundawadi/portfolio-comments"
                  data-repo-id="R_kgDOHODkgA"
                  data-category="Q&A"
                  data-category-id="DIC_kwDOHODkgM4COudx"
                  data-mapping="pathname"
                  data-reactions-enabled="1"
                  data-emit-metadata="0"
                  data-input-position="bottom"
                  data-theme={props.dark?"dark":"light_protanopia"}
                  data-lang="en"
                  crossorigin="anonymous"
                  async>
              </script>
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
                <Box sx={{paddingTop:'2%'}}>
                    <Box>
                        <Typography variant="h5">Time Based Maintanence</Typography>
                        <Typography variant="subtitle">Article by <span onClick={()=>{
                        navigate("/")
                        }}>Karun Dawadi</span>, Published on <span onClick={()=>{
                        navigate("/article")
                        }}>April 22</span></Typography>
                    </Box>
                </Box>

                {/* Insert here  */}
                <div className='giscus'></div>
                <Footer/>
            </Container>
        </Box>
    )
}

export default TimeBasedMaintanence