import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

function Reflection2023(props) {
  const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
  const navigate = useNavigate()

    return (
        <Box style={{
        }}>
            <Helmet>
              <title>The year of Karun</title>

              {/* All privacy related materials  */}
              <meta name="robots" content="noindex,nofollow"/>
              
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
                        <Typography variant="h5">The year of Karun</Typography>
                        <Typography variant="subtitle2">Published on <span onClick={()=>{
                            navigate("/article")
                        }}>December 31, 2023</span></Typography>
                    </Box>
                </Box>

                    {/* Post starts here  */}
                    <Box>
                        {breakPara()}
                        <Typography variant="subtitle1" fontWeight="bold">Act I: Winter Whispers & First Steps</Typography>
                        <Typography>
                            The year kicked off all warm and familiar, celebrating Magne Sakranti 
                            with everyone – and that extra-special trip to the movies with Hajurba! 
                            It was his first movie in 35 years, can you believe that? Life sure surprises us, 
                            like that half-rainbow I spotted, making me dream of where it might lead 
                            (maybe to that pot of gold everyone talks about!). Then came Colorado, 
                            a snowy adventure with Sahaj and Shishir. We stumbled around on skis, 
                            explored Denver's cool city hall, and laughed till our bellies hurt. 
                            And what better way to wrap up winter than with a brand new Toyota, 
                            shining like a champ ready for exciting new journeys!
                        </Typography>

                        {breakPara()}
                        <Typography variant="subtitle1" fontWeight="bold">Act II: Graduation, Reunions, & Road Trippin'</Typography>
                        <Typography>
                            Spring beamed with the grandest smile ever – graduation day! 
                            Mom, Dad, and Hajurba traveled all the way from Nepal, their love 
                            wrapping around my heart like a warm hug from the sun. Our journey 
                            led us to Texas, where Prabin and I proudly strolled across the stage, 
                            followed by a feast fit for kings (well, more like hungry college boys!).
                            The wind at White Sands shared secrets, Vegas sparkled like a disco ball, 
                            and the Grand Canyon etched its magic into my mind. As summer's sunshine 
                            embraced my birthday, a surprise party unfolded, and I took an exciting 
                            leap into the realm of real estate – big things on the horizon!
                        </Typography>

                        {breakPara()}
                        <Typography variant="subtitle1" fontWeight="bold">Act III: Autumn Adventures & Family Ties</Typography>
                        <Typography>
                            Anamol's visit unfolded with Yosemite's towering trees, while 
                            Shishir painted San Francisco in clam chowder and laughter. 
                            Festivals buzzed with familiar joy – Kukur puja with Toby, 
                            Bhai tika's card games reaching a heated climax (someone lost big time!), 
                            and Thiar echoing with fun. Shashwat and Prabin challenged me to the 
                            Mission Peak adventure, but they fell through as they took a lot of time. 
                            Nonetheless, Mission Peak remained a reminder to keep exploring, just like 
                            life. Anamol's graduation in Dallas wrapped up the year, a proud moment 
                            shared across miles. Back at my university, nostalgia washed over me, a 
                            warm wave of memories that brought me to this point.
                        </Typography>

                        {breakPara()}
                        <Typography variant="subtitle1" fontWeight="bold">The Curtain Closes, Anticipation blooms</Typography>
                        <Typography>
                            This year was a rollercoaster, a mix of both everyday moments 
                            and extraordinary adventures. From family reunions to personal triumphs, 
                            it carried whispers of sadness and bursts of joy. As the curtain gracefully 
                            falls on 2023, anticipation whispers promises of new adventures, fresh challenges, 
                            and who knows, maybe another half-rainbow to chase. So, here's to 2024 and all 
                            the beautiful surprises it holds for me! There you have it, the Year of Karun, 
                            Nepali style! I hope this feels more natural and captures the essence of your 
                            amazing year in a way that truly resonates with you. 
                            
                            {breakPara()}
                            Wishing you all the best for 2024 and beyond! 🎉
                        </Typography>
                        {breakPara()}
                    </Box>
                <Footer/>
            </Container>
        </Box>
    )
}

export default Reflection2023