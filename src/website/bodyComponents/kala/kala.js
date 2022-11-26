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
                                <dt class="col-sm-3">Programming Langugaes</dt>
                                <dd class="col-sm-9">Python, TypeScript, Swift, JavaScript ES5/ES6, C, SQL, C++, Java, Regex</dd>

                                <dt class="col-sm-3">FrameWorks and Libraries</dt>
                                <dd class="col-sm-9">
                                    <p>React Native, SwiftUI, UIKit, React, Redux, Axios, Expo, Flask, Django, Pandas, Numpy, Bootstrap</p>
                                </dd>

                                <dt class="col-sm-3">Web Technologies</dt>
                                <dd class="col-sm-9">AWS, HTML5, CSS, XML, JSON, REST, Github Pages, WordPress, CPanel, Google Analytics</dd>

                                <dt class="col-sm-3 text-truncate">Database</dt>
                                <dd class="col-sm-9">MySQL, SQL/NoSQL , Firebase</dd>

                                <dt class="col-sm-3 text-truncate">Tools/ Repository</dt>
                                <dd class="col-sm-9">GIT, Service-Now, Maven, CocoaPods</dd>

                                <dt class="col-sm-3 text-truncate">Developer Tools</dt>
                                <dd class="col-sm-9">XCode, Android Studio, VS Code, IntelliJ, Eclipse</dd>

                                <dt class="col-sm-3 text-truncate">Operating Systems</dt>
                                <dd class="col-sm-9">macOS, Windows, iOS, Android, Unix, Linux</dd>

                                <dt class="col-sm-3 text-truncate">Methodologies</dt>
                                <dd class="col-sm-9">Agile, Waterfall, Test Driven Development (TDD)</dd>

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