import React from 'react';
import { Container, Box, Typography } from "@mui/material";
import Footer from "../../../footer/footer";
import ProjectRow from '../../../navbar/project row/project_row';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

function InsideOutReview(props) {
    const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
    const navigate = useNavigate()
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>Inside Out</title>
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
                        <Typography variant="h5">What is inside the mind of a 11-year old ?</Typography>
                        <Typography variant="subtitle2">Published on <span onClick={()=>{
                        navigate("/article")
                        }}>January 21, 2019</span></Typography>
                    </Box>
                </Box>

                <Box sx={{
                    paddingTop:'2%'
                }}>
                    {breakPara()}
                    <Typography varaint="paragraph">
                        Inside Out was released in the theaters on June 19, 2015. I couldn’t watch it on the release date because of my heavy school work and extra classes. However, my friend got a chance to watch it on the same day. He highly recommended me to watch it. So, Inside out was in my bucket list of movies to watch. When I arrived in the United states to pursue my future education, I had a lot of time. Thus, I decided to watch the movies on my bucket list. The first movie on the list was Inside Out followed by pirates of Caribbean. I saw Inside Out on my laptop at my study desk in my apartment. My roommate was playing a game on his laptop due to which the internet connection was slow. The movie was buffering for a few minutes in the beginning but later it was streaming properly. Overall, the movie was pleasant. Though it was an animated movie the plot, characters, theme, language, music, and setting in the movie was fascinating. Therefore, in this paper, I will discuss each element that makes Inside out a fascinating movie.  
                    </Typography>
                    {breakPara()}
                    <figure class="figure">
                        <img 
                        class="img-fluid" alt="..."
                        src={require('../assets/images/insideOut/2.jpeg')}/>
                        <Typography align={'center'}>Rile leaves her hometown for San Francisco</Typography>
                    </figure>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        The movie commences with the birth of Riley Anderson. Inside Riley’s head joy is created. Joy is excited and walks towards the console that has a single button. Joy clicks the button and Riley responds. The experience of Joy shows that emotions could control Riley. Later, Sadness, Fear, Disgust and anger are created inside Riley’s head. Each emotion that exists in Riley’s head has a shape similar to a human being. These emotions can use the console to control Riley and when they did so a memory was created and sent inside Riley’s head. The emotions referred Riley’s head as the headquarter. The memory that the headquarter received was in a form of a ball and color-coded to represent the emotions that the memory is associated with. Yellow meant joy, red meant anger, green meant disgust, blue meant sadness, and purple meant fear. The color-coded memory is stocked in a cupboard which at the end of the day was sent to long-term memory. Inside the headquarters, there is a section in which memory that played an important role in Riley’s life was stored. These memories are referred to as the core memories and these power Riley’s different personalities.
                    </Typography>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        Riley grows and so does her console. The console is changed from a single button to multiple buttons. Now, she has core memories that powered up her different personality island like friendship, family, honesty, goofball, and hockey. Each emotion had their own role. However, emotions couldn’t figure out the purpose of sadness, so she was not allowed to control the console. For the emotions to have a good day, all the stocked shelves should consist joyful memories, making joy the leader of the headquarters. Everything was going perfect until Riley was 11, then suddenly Riley’s parents decided to move to San Francisco, California to start Riley’s father’s business. Riley is excited and has a lot of expectations from her new home in San Francisco. All these expectations are short-lived when Riley finally reach her new home. She does not like her new home. Back in the headquarters, the emotions stocked in the shelves changes from joyful to mixed. Joy being the leader tries multiple times to return the shelves to yellow but cannot.                    
                    </Typography>
                    {breakPara()}
                    <figure class="figure">
                        <img 
                        class="img-fluid" alt="..."
                        src={require('../assets/images/insideOut/3.jpeg')}/>
                        <Typography align={'center'}>Ferry Building in San Francisco</Typography>
                    </figure>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        Riley begins her new life in San Francisco. She goes to the first day of her school and is happy until sadness touches a core memory making Riley sad. Joy denies accepting this and tries overwriting the sad memory resulting  in a small fight between sadness and joy which ends by both being sucked out of the headquarters. Without joy and sadness, the headquarters is run by other emotions: fear, disgust, and anger. Riley begins to act abnormal and on the suggestion of anger decides to go back to Minnesota to get new core memories. Joy and sadness with the help of Bing-Bong return back to the headquarters. Over the journey, joy realizes the purpose of sadness and allows Riley to be sad which joy had never allowed doing. Riley realizes her mistake and abandons her plan. She goes to back to her new home and confesses to her parents that she misses her old home. In the ending of the movie, Riley is 12 and she has a brand-new console in which emotions could control Riley together creating a mixed color of memory, which was in the core memory as well as in the shelves.                    
                    </Typography>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        The movie falls under fantasy and comedy-drama genre. It is a family-friendly movie especially aimed at children. Though, being aimed for children the movie has multiple messages to convey to its viewers. The movie portrays its moral in two ways. First, inside Riley’s head i.e. the headquarter and second Riley’s environment. Riley’s experience with homesickness tries to teach its young viewers that life is not perfect and is never as planned. While life cannot be perfect, it is always important to accept our emotions. If we keep suppressing our emotions, then it may reach a catastrophic result. This can be easily proven as in some part of the movie Riley becomes impassive. The experience with Riley teaches the viewer to accept the changes that are happening in their life and it is okay not to be always happy.  Inside Riley’s head i.e. the activity inside headquarters also teaches an important lesson. At the beginning of the movie, it is shown that joy was not ready to accept that Riley needed another emotion in her life. When joy goes through travel experience in the movie, she realizes that sadness has a purpose. This realization proves that all the emotions are equally important and needed to work together to make Riley work perfectly. This experience teaches the viewers that while working in a group we must work together if we want to get the perfect result.
                    </Typography>
                    {breakPara()}
                    <figure class="figure">
                        <img 
                        class="img-fluid" alt="..."
                        src={require('../assets/images/insideOut/4.jpeg')}/>
                        <Typography align={'center'}>Lombard Street in San Francisco</Typography>
                    </figure>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        “Bundle of Joy” is the music that makes Inside out a complete film experience. In different parts of the movie, there are instrumental variations of “Bundle of Joy” combined with other music. “Bundle of Joy” is used to introduce joy in the movie. Then, instrumental variations of “Bundle of Joy” and other tunes from “Team Building” is used to introduce other emotions. If the music development in the movie is analyzed, then it is done insightfully.  Inside the movie, if anything joyful happened , then the viewers are signaled by playing “Bundle of Joy.” While joy is in dump memory, she realizes the purpose of sadness. During this, a music is played in the background titled “Joy turns to sadness a growing personality.” This music justifies what is happening in that scene and as the music develops, we see that joy becomes empathetic. In the end , “Bundle of Joy” is again used to signal the viewer that Riley has returned back to her mental state and is no longer homesick. The language used in the movie lacks musical quality. However, the movie has an excellent soundtrack created to explain the mental state of Riley.                    
                    </Typography>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        Throughout the movie, different parts of the united states are shown. When Riley and her family moves from Minnesota, they take the Arizona highway showing its major attraction. When they arrive at California then Golden gate bridge is shown. There are various scenes which show different places in California like Yosemite Valley and San Francisco’s famous places like California street, Lombard Street, and Pier Embarcadero. There are flashbacks in the movie where Riley and her family are seen at Cabazon Dinosaurs. Additionally, the location of Riley’s new home is in a city. Inside the headquarters, there is an office designed for the emotions to work in collaboration. There are places that the characters are frequently seen in like the memory dump and long-term memory. There is a location in the movie called dreams production near to which  the imaginative land is placed. There is also a place called sub-conscious mind in the movie. Overall, the settings in the movie are places that are in real world and inside Riley’s head.                    
                    </Typography>
                    {breakPara()}
                    <figure class="figure">
                        <img 
                        class="img-fluid" alt="..."
                        src={require('../assets/images/insideOut/5.jpeg')}/>
                        <Typography align={'center'}>Train line in San Francisco</Typography>
                    </figure>
                    {breakPara()}
                    <Typography variant='paragraph'>
                        In conclusion, the effort made by the creators to explain the different emotions that goes in a human brain is exceptional. The movie shows how an 11-year-old girl accepts homesickness and confesses that she misses home to her parents. The attempt to explain this process using characterized emotions stands out. Overall, I liked each part of the movie. I liked “Bundle of Joy” very much due to which it is still my alarm tune. The animators, voice artists, and the directors for the movie did a fantastic job making inside out a powerful movie.                   
                    </Typography>
                    {breakPara()}
                </Box>
                <div className='giscus'></div>
                <Footer/>
            </Container>
        </Box>
    )
}

export default InsideOutReview