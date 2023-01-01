import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

function Reflection2022(props) {
  const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
  const navigate = useNavigate()

    return (
        <Box style={{
        }}>
            <Helmet>
              <title>Reflection 2022</title>
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
                        <Typography variant="h5">A Memorable Year of Adventure, Loss, and New Beginnings</Typography>
                        <Typography variant="subtitle2">Article by <span onClick={()=>{
                        navigate("/")
                        }}>Karun Dawadi</span>, Published on <span onClick={()=>{
                        navigate("/article")
                        }}>December 31, 2022</span></Typography>
                    </Box>
                </Box>

                    {/* Post starts here  */}
                    <Box>

                        {breakPara()}
                        <Typography>
                            The year 2022 began in Nepal, where I was served a glass of water in 
                            the cutest way possible by Unik. After celebrating the new year with 
                            my family, I began my journey back to the United States. This travel 
                            back was one of the most memorable ones. The entire flight was 40 hours 
                            long and began in Kathmandu. It took 5 hours and 20 minutes to get to Doha, 
                            where I had a "brief" layover of 6 hours. After that, I took a 16-hour 
                            flight to Chicago. I waited in Chicago for another 5 hours before boarding 
                            a 3-hour flight to Austin, where I had a 3-hour layover. Finally, after a 
                            1-hour flight, I reached Dallas. Prabin was there to pick me up, and I 
                            really appreciate it. Although the trip was long, it was worth it because 
                            my trip in Nepal was very fun and I got to travel home after 3 years. 
                            The only not-so-fun part was getting COVID after returning to the United States. 
                            I think I contracted the virus in one of the airports I was at, but I had 
                            very few symptoms. I'd like to thank my roommates for being there for me 
                            during this time. I'm sorry, Prabin, as I think I may have given him COVID 
                            too, as he also got it around the same time.
                        </Typography>

                        {breakPara()}
                        <Typography>
                            After recovering from COVID-19, Shishir, Suman, and I decided to try something 
                            new and exciting: alligator bites! It was an experience like no other. Soon after, 
                            my final semester started and, to our surprise, we got another snowstorm in Texas. 
                            It's always an adventure in the Lone Star State! In the following weeks, we 
                            celebrated birthdays for Suman (turning 23) and Prajwal. I also had the opportunity 
                            to work on an exciting project with my team mates from Team Groot. The project was 
                            an app called Electioneering that helps people running for office at the grass roots 
                            level manage their campaigns more efficiently. With the semester coming to a close, 
                            Prajwal, Shishir and I decided to take a trip to Galveston to make the most of our 
                            remaining days. We left at midnight and drove through the night, arriving at our hotel 
                            at 5:00 am. In Galveston, we had a blast and even visited an aquarium where I saw my 
                            first shark! It was a trip full of memories that I'll never forget. Before I knew it, 
                            graduation was here and we celebrated with a visit to Himalayan Aroma. It was a great 
                            time. Later, we even went to a gun range where I tried my hand at shooting a pistol 
                            (I was too scared to try a rifle). It was a quintessential American experience.
                        </Typography>

                        {breakPara()}
                        <Typography>
                            As the summer heat set in, my friend Prabin and I decided to go on a hike. 
                            It was a challenging 8 miles, made all the more difficult by the scorching 
                            temperature. All the animals were out, and we even encountered a rattlesnake 
                            on the trail. It was a scary moment, but we kept walking for a good 30 minutes 
                            before catching our breath. That evening, we treated ourselves to an unforgettable 
                            dinner. It's a day I won't soon forget! It was Prabin's birthday, and we wanted 
                            to make it extra special by surprising him. However, he was such a deep sleeper 
                            that he didn't even hear us at first. So we had to get creative and wake him up 
                            with a fire alarm prank, which was hilarious and definitely caught him off guard. 
                            It was a wild and memorable celebration, and we made some unforgettable memories 
                            together. And that was just the start of a fantastic year! I landed a new job at 
                            a gorgeous skyscraper with an amazing view, and before I moved, I made sure to 
                            squeeze in some thrilling water park adventures. I even met some tourists from 
                            Europe at the beautiful Lake Caddo. Plus, my friend Anamol turned 23 this year - 
                            he's getting old! The year ended on a high note when I reconnected with an old 
                            friend, Shashwat, who had really changed since we last saw each other.
                        </Typography>

                        {breakPara()}
                        <Typography>
                            As I look back on the events of this year, it is hard to ignore the fact that 
                            not all good things happened. In fact, one of the most difficult and heartbreaking 
                            moments for me was the loss of my paternal grandmother. She had been a constant 
                            source of hope and support for our family, and her absence has left a deep void 
                            in our lives. The loss of a loved one is never easy, and the pain of my grandmother's 
                            passing has been compounded by the fact that she was such a central figure in our 
                            family. She was a beacon of hope, always there to offer words of encouragement and 
                            guidance. She inspired us all with her positive outlook and determination, and her 
                            loss has been felt deeply by all of us. Despite this sadness, I have tried to focus 
                            on the positive aspects of this year. I have tried to approach each day with the 
                            same sense of hope and determination that my grandmother possessed, and I have 
                            tried to find joy in the little things that life has to offer. This year has 
                            certainly been a challenge, with all of the ups and downs that life brings, but 
                            I have tried to embrace each day as a new opportunity to make the most of it.
                        </Typography>

                        {breakPara()}
                        <Typography>
                            As I reflect on this difficult year, I am reminded of the strength 
                            and resilience that my grandmother possessed. She faced challenges 
                            and hardships with grace and determination, and she always managed to 
                            find the good in every situation. She will always be a source of inspiration 
                            and guidance for me, and I will always strive to live up to the example she 
                            set for our family. May her soul rest in peace, and may her memory continue to 
                            be a source of comfort and strength for all of us.
                        </Typography>

                        {breakPara()}
                        <Typography>
                            Again, Happy New Year 2023! K bye! 
                        </Typography>
                        {breakPara()}
                    </Box>
                <div className='giscus'></div>
                <Footer/>
            </Container>
        </Box>
    )
}

export default Reflection2022