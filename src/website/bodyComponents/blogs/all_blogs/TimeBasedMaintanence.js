import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

function TimeBasedMaintanence(props) {
  const navigate = useNavigate()
  const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>Time Based Maintanence</title>
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
                <Box sx={{
                  paddingTop:'2%'
                }}>
                  <Box>
                    <Typography variant="h5">Time Based Maintanence</Typography>
                    <Typography variant="subtitle2">Published on <span onClick={()=>{
                      navigate("/article")
                    }}>April 22, 2022</span></Typography>
                  </Box>

                  {breakPara()}

                  <Typography variant="paragraph">
                  As time passes, software products break. These may happen because of mainly four reasons: update in the code, changes in the software host environment, enhancement in software’s code, or defects in the software. In any case if we need to fix the break, we usually fix the error, patch the software, or extend the functionality of the software. This process of fixing, patching, or extending the functionality of software is called software maintenance. Software maintenance has a crucial part in software development as it keeps the software working after its creation. The cost of software maintenance is very dependent on the methodology of maintenance. Many models are created which have different methodologies for software maintenance. One of the models is the time-based maintenance model.
                  </Typography>

                  {breakPara()}

                  <Typography variant="paragraph">
                  Any form of software maintenance is triggered by some factor. If the software breaks and a fix is needed immediately, the break (error) is the trigger. Similarly, in case of time-based maintenance model, time is the trigger. Time is not a complex trigger as keeping track of it is not a complicated task. This makes time-based maintenance relatively a simple model and training people for time-based maintenance model a simple task. This simplicity of time-based maintenance makes it very cost effective. In real-world, time-based software maintenance can be fruitful. To justify this, we can take the example of Windows 10. Windows 10 releases software updates and patches in a timely manner. As they follow a time-based maintenance pattern they can collect user complaints, bugs, and other updates and release a giant fix. These fixes prolongate the lifecycle of Windows 10 (true for other software’s also) as it is regularly maintained.
                  </Typography>

                  {breakPara()}

                  <Typography variant="paragraph">
                  Waiting for a certain period to fix a software is not always optimal. Some problems may require a faster solution while some can be solved by waiting till maintenance cycle. If we were to change time-based model to accommodate the ambiguity of time to maintain software, we will see different results. If we focus on solving a software issue too early, it may increase the maintenance risk. Maintenance risk is the risk of breaking a software after certain number of maintenance fix. If we focus on solving a software issue too late, it may cause catastrophic damage in the software usability. Estimating the right time is very crucial as choosing a shorter time may increase the maintenance number (increasing cost) and choosing later time reduces the maintenance number (decreasing cost; but affecting usability). Therefore, the effectiveness of time-based maintenance is very dependent on the time chosen.
                  </Typography>
                  
                  {breakPara()}

                  <Typography variant="paragraph">
                  A model will not fit all conditions. This fact holds true for time-based model as well. Time based model if used correctly can increase the life of software. This can be proven by the huge number of legacy systems that are still being used. Since time-based software development does not facilitate all criteria. Which would the optimal place to use it? The answer is for systems with high pressure for application failure and to increase the life of a software. In conclusion, its low cost and simple model makes time-based software maintenance a good choice for many projects.
                  </Typography>

                </Box>
                <Footer/>
            </Container>
        </Box>
    )
}

export default TimeBasedMaintanence