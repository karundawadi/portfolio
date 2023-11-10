import React from "react"
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import { BsCaretDownFill } from 'react-icons/bs'

function Skills(){ 
    return (
        <Container>
            <Box sx={{
                paddingTop:2
            }}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsCaretDownFill />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Technical Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <dl class="row">
                                <dt class="col-sm-3">Programming languages</dt>
                                <dd class="col-sm-9">Typescript, Swift, Java, Objective C, Python, C, C++, C\#, Regex</dd>

                                <dt class="col-sm-3">Amazon Web Services Technologies</dt>
                                <dd class="col-sm-9">
                                    <p>Cloud-formation, Cloud-Watch, Lambda, S3, API Gateway, Cloud-Front</p>
                                </dd>

                                <dt class="col-sm-3">Back-end development</dt>
                                <dd class="col-sm-9">AWS CDK, Back-end for Front-end, Server-less, Django, Flask</dd>

                                <dt class="col-sm-3 text-truncate">Mobile development</dt>
                                <dd class="col-sm-9">: iOS (Swift, Objective C, RxSwift), React Native, Expo</dd>

                                <dt class="col-sm-3 text-truncate">Web development</dt>
                                <dd class="col-sm-9">: React, Angular, Redux, Axios, Bootstrap, HTML, CSS</dd>

                                <dt class="col-sm-3 text-truncate">APIs</dt>
                                <dd class="col-sm-9">RESTful APIs, GraphQL, Web Sockets</dd>

                                <dt class="col-sm-3 text-truncate">Database</dt>
                                <dd class="col-sm-9">MySQL, MongoDB, PostgressSQL</dd>

                                <dt class="col-sm-3 text-truncate">Testing</dt>
                                <dd class="col-sm-9">Jest, XUnit, XCUITest, Selenium, Unit testing, A/B Testing, Smoke and Sanity testing</dd>

                                <dt class="col-sm-3 text-truncate">Build Tools/ Repository</dt>
                                <dd class="col-sm-9">GIT, Maven, Gradle, CocoaPods, Github, Bitbucket, Gitlab</dd>

                                <dt class="col-sm-3 text-truncate">Methodologies</dt>
                                <dd class="col-sm-9">Agile, TDD, RAD, BDD</dd>

                                <dt class="col-sm-3 text-truncate">Developer Tools</dt>
                                <dd class="col-sm-9">IntelliJ, Postman, XCode, Android Studio, VS Code, Eclipse, Jira, Service-Now</dd>

                            </dl>
                        </Box>
                    </AccordionDetails>

                </Accordion>

                {/* <Accordion>
                    <AccordionSummary
                    expandIcon={<BsCaretDownFill />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>

                    <AccordionDetails>
                        <Box>
                            <dl class="row">
                                <dt class="col-sm-3">Description lists</dt>
                                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                                <dt class="col-sm-3">Euismod</dt>
                                <dd class="col-sm-9">
                                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                                </dd>

                                <dt class="col-sm-3">Malesuada porta</dt>
                                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                <dt class="col-sm-3">Nesting</dt>
                                <dd class="col-sm-9">
                                    <dl class="row">
                                    <dt class="col-sm-4">Nested definition list</dt>
                                    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </Box>
                    </AccordionDetails>

                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<BsCaretDownFill />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Box>
                            <dl class="row">
                                <dt class="col-sm-3">Description lists</dt>
                                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                                <dt class="col-sm-3">Euismod</dt>
                                <dd class="col-sm-9">
                                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                                </dd>

                                <dt class="col-sm-3">Malesuada porta</dt>
                                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                <dt class="col-sm-3">Nesting</dt>
                                <dd class="col-sm-9">
                                    <dl class="row">
                                    <dt class="col-sm-4">Nested definition list</dt>
                                    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </Box>
                    </AccordionDetails>
                    
                </Accordion> */}
            </Box>
        </Container>
        
    )
}
export default Skills