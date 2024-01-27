import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

function TimeBasedMaintanence(props) {
  const breakPara = (customPadding="1.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
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
                  data-mapping="url"
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
                        <Typography variant="subtitle2">Article by <span onClick={()=>{
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