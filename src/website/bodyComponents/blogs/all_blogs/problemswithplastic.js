import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

function ProblemsWithPlastic(props) {
  const breakPara = (customPadding="2.5%")=>{return <Box sx={{paddingTop:`${customPadding}`}}/>}
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
                <Box sx={{paddingTop:'2%'}}>
                    <Box>
                        <Typography variant="h5">Problems with plastic and how to solve them</Typography>
                        <Typography variant="subtitle2">Published on <span onClick={()=>{
                        navigate("/article")
                        }}>January 19, 2019</span></Typography>
                    </Box>
                </Box>
                {breakPara()}
                <Typography variant="paragraph">
                Plastic is destroying our nature and ecosystem. Many people assume that their responsibility is over after they throw used plastic items in the trash. However, I disagree with this. If people really followed their responsibilities, then the plastic troubles would not be present in the first place. So, after decades of attempting to solve the plastic problem why do we still have it? Answering this question in a single sentence seems problematic but if we want to do it, we must do it on different levels. First, the scientific level. The very nature of plastic is an issue that cannot be solved without a major change. Second, economic level. Plastics has been a fortune for many companies. If plastics were to vanish , then the companies would lose their business. Finally, the personal level. Our ignorance towards plastics has made the plastic situation even worse. Then, what is the solution?  Is it recycling? Yes. However, recycling only will not solve the plastic troubles. Therefore, to really solve the plastic problem, we need to evaluate how our market works, how we react to the situation, and how changes should be made in ourselves and in our law.
                </Typography>

                {breakPara()}

                <Typography variant="paragraph">
                Plastics has become a multi-billion-dollar industry. According to Leighton Walter Kille and Rachel Stephens, the authors of “Plastics, human health and environmental impacts: The road ahead”, “Plastic manufactures makes up 4.6% of the annual petroleum consumption in the U.S” proving that the plastic industry is huge and is related closely to our economy (1).  In the United States, almost all companies that exist practice free market policy. The free market policy is a system that determines the value of a product based on its demand by the market and consumers. Major plastic companies practice free market policy. However, the arrival of solutions for plastic problem could not affect the companies. Why? To explain the reason why it did not, let us do a thought experiment. Just imagine yourself as an environmentalist in a grocery store. You are buying groceries for the next week, so you pick up products that use fewer plastic in a cart and another with products that you would normally buy. When checking out, you can see a huge price difference between the two carts. Cart with products having less plastic use is highly  expensive and has remained so throughout the years. It is because the concept of using less plastic in products is not economical, both for the companies and people. To justify this let us take an example of reusable bags. Reusable bags were released at the same time period when the concept of plastic reduction came. According to Jeff Strickler, the author of “Are we drowning in reusable grocery bags?”, “39 percent of grocery shoppers own” a reusable bag (2). However, very few owners use them. Due to the high demand in plastic bags it is not economical to produce large scale reusable bags because we rarely use them. Analyzing our market, it can be clearly seen that we people are the reason why plastic exist. Therefore, why do we behave so ?
                </Typography>

                {breakPara()}

                <Typography variant="paragraph">
                The answer to this question can be found in people’s psychology. Let us consider,  you are carrying a recyclable item like a soda can. You take a walk to throw the can and you do not see a recycle bin nearby. Now, there are two choices: either throw the can in a bin or carry it until you see a recycle bin. There is a very less chance that you will do the latter because you convince yourself  that this is the last time you will do it. However, there are millions of people like you who throw away the can in the wrong bin. Our carelessness, lack of willingness, and ignorance toward plastic issues has made the problem even harder to solve. According to E.B. the author of “Recycling in America: In the bin”, Americans throw away  “$11.4 billion” dollar worth of “recyclable containers and packaging” (1).  Such a sum of money cannot be resulted just by cans. It is because of people who throw their garbage in the wrong bin resulting in a heterogenous mixture of garbage. Additionally, when this mixture reaches the recycling facilities they are not separated. Most of the recycling facilities are designed in the “1990s” which cannot handle changes that occur in the country’s “waste stream” (E.B. 1). That results in millions of kilograms of plastic in the landfills.
                </Typography>

                {breakPara()}

                <Typography variant="paragraph">
                To solve the plastic problem, we should work on three different levels: individual, state government, and federal government. First, the individual level. If individuals know their responsibilities and follow their duties, then half of the problem will be solved. The use of three R’s (Reduce, Reuse, Recycle) is the second step for an individual who is willing to solve the plastic problem. A person first should commit to reduce their wastage. It can be easily done by reducing the use of plastic sources, for example using a reusable bag instead of plastic bag while going for groceries. Though, do not just collect the reusable bags, as “there’s no need to collect more “ reusable bags “than you need” (Strickler 1).  I know that there are very few items available that do not have plastics in them. This does not mean that you have an excuse not to reduce the usage. You can take small steps from your side like using a reusable bottle instead of a plastic bottle. An average human being takes in 3 liters of water each day. This translates to 6 water bottles per day as a plastic bottle has 500 ml of water. In which case, using tap water would save you 6 plastic bottles and three dollars daily if a plastic bottle costed 50 cents. If you obtain a plastic item, then always remember to reuse them, if possible. After, the two R’s comes the third and last R i.e. Recycle. I know that most of the products provided to us cannot be recycled in personal level. However, this should not discourage you from doing your part. When you need to throw trash always use the right bin. Never let your temptation of throwing the trash in the wrong bin get to you. Therefore, if you are disposing paper, put in the paper bin. A small step from your side can save couple of bottles, paper, and cans from getting to landfills. The last step from your side is the separation of trash at your home among organic, disposable and recyclable items and throwing them in the right bin.
                </Typography>

                {breakPara()}

                <Typography variant="paragraph">
                The next level solution for plastic problem, the state government. The state government should provide citizens with proper bins that can be used for recycling. If proper recycling bins are provided to the customers, then the recyclable waste generated from households can be easily diverted from landfills. Plus, the current separation system should be updated which will result in higher recycling rate. The next level of our solution, the federal government. The federal government should pass a set of common laws to control the “incompatible local systems recycling programs” (E.B. 2). Additionally, the federal government should pass laws to counteract the problems caused by single use plastics as they are the ones which fill our landfill. An example of the law can be to force the company that produce the single use plastics to handle the waste they created. The federal government can also limit the disposal rate  by passing laws that would increase the “landfill taxes” and also launching a program called “pay-as-you-throw”. (E.B. 2). If such programs were launched, then  people and companies would think twice before throwing something away because they would have to pay for the waste they created. I believe that if people are charged for the waste they dispose, then they will be extra sure to incorporate whatever in their power to reduce the waste they create. 
                </Typography>

                {breakPara()}

                <Typography variant="paragraph">
                Of course, many will probably disagree on the grounds that the government can easily solve the problem caused by plastics by increasing the funding. Yes, the government can easily solve the problem by increasing the funding but blaming everything on the government by not following our duties seems wrong. If we throw our separated garbage in the respective bin, then 90% of the problem will be solved. Additionally, if we do this , then the government should not increase our taxes to solve the problem. Most of my readers will argue that if they throw one can or bag of garbage on a regular bin then there would be no problem. Yes, if someone throws one piece of garbage in different bin nothing big happens. However, if we look at human nature , then it can be seen that we think in the same way. If you are not following your responsibility , then there must be others doing the same resulting thousands of kilograms of un-sorted garbage. This un-sorted garbage turns into pollution and kills millions of harmless creatures that are forced to share this beautiful planet with us. However, skeptics may say that pollution is not hurting them, then why should they bother? Yes, pollution is not hurting us in the short run. However, pollution will hurt us in the long run as plastic has entered in our body from fishes we eat and plastic we use. This plastic inside our body causes “early sexual maturation, decreased male fertility and aggressive behavior” (Stephens and Kille 3). Hence, it is crucial time to act to solve the issues of plastics.                
                </Typography>

                {breakPara()}
                
                <Typography variant="paragraph">
                In conclusion, our psychology of ignoring and failed government polices has made it difficult to solve the problems caused by plastics. Therefore, to really solve the plastic problem, we need to change ourselves, laws ,and loopholes we have in our system. I believe that if we all work together then the problem of plastic can be solved in upcoming few decades.  
                </Typography>
                
                {breakPara()}
                
                <Typography variant="paragraph"><span style={{
                    textDecoration:"underline"
                }}>Works Cited :</span></Typography>

                {breakPara()}

                <Typography variant="body2">E.B. “In the Bin.” The Economist, The Economist Newspaper, 22 Apr. 2015, www.economist.com/democracy-in-america/2015/04/22/in-the-bin.</Typography>
                
                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">Strickler, Jeff. “Are We Drowning in Reusable Grocery Bags?” Star Tribune, Star Tribune, 26 Feb. 2013, startribune.com/are-we-drowning-in-reusable-grocery-bags/192516171/.</Typography>
                
                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">Stephens, Rachael, and Leighton | Walter Kille. “Plastics, Human Health and Environmental Impacts: The Road Ahead.” Journalist's Resource, Journalist's Resource, 9 Oct. 2014, journalistsresource.org/studies/environment/pollution-environment/plastics-environmental-health-literature-review.</Typography>
                

                <Footer/>
            </Container>
        </Box>
    )
}

export default ProblemsWithPlastic