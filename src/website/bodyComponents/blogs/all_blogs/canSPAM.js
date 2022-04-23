import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import Footer from "../../../footer/footer"
import ProjectRow from '../../../navbar/project row/project_row'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { useTheme } from '@emotion/react';

function CanSpam(props) {
  const breakPara = ()=>{return <Box sx={{paddingTop:'4%'}}/>}
  const theme = useTheme()
  const navigate = useNavigate()
    return (
        <Box style={{
        }}>
            <Helmet>
              <title>CAN Spam Act 2003</title>
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
                        <Typography variant="h5">CAN Spam Act of 2003</Typography>
                        <Typography variant="subtitle">Article by <span onClick={()=>{
                        navigate("/")
                        }}>Karun Dawadi</span>, Published on <span onClick={()=>{
                        navigate("/article")
                        }}>Feburary 20</span></Typography>
                    </Box>
                </Box>
                {breakPara()}
                <Typography variant="paragraph">
                E-mail (Electronic mail) is a fast, secure, and convenient way of exchanging messages between peoples and organizations. As a result, the use of email has skyrocketed. Despite the advantages of email, it is easy to misuse. The best example of misusing email is sending spam. As email are used as official communication for major industries, the 108th congress passed a bill in 2003 to prevent spammers from misusing emails. The bill named "Controlling the Assault of Non-Solicited Pornography and Marketing Act of 2003" or commonly called CAN-SPAM act of 2003 attempted to limit spammers and protect the rights of commercial emailers (“Text - S.877 - 108th Congress (2003-2004): CAN-SPAM Act of 2003”). However, 70% of the current emails sent are still spam (Kigerl 2016).
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                CAN-SPAM act falls under "obscenity and the sexual exploitation of children" (Kigerl 2016). This law is particularly aimed for commercial email senders (Kennedy& Christine 2016).  According to this law, for sending a commercial email, an email must meet some prerequisites. First, the composition of the email. The composer should identify the email as commercial or solicitation (Kennedy& Christine 2016).  Second, the header and subject line of the email should be made deceptive (Fulcrumtech 2011). Third, the email should contain a link for an opt-out (to choose not to participate in something) from receiving an email. The opt-out link in the email should work for at least 30 days after the transmission of the email. However, if the customer requests for opt-out then the sender should address it within 10 business days. This law doesn't supersede state laws on computer crime in general but supersedes all state laws that have been made against spam acts.  The law also mentions the Federal Trade Commission (FTC) as the "primary enforcer” and "clarifying" branch of this law (Kennedy& Christine 2016) (Kigerl 2016).
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                The violation of the law will result in financial penalties and even imprisonment for up to 5 years, and these violations can range from not following the law to collecting email from different sources using unethical ways like brute-force attacks ((“Text - S.877 - 108th Congress (2003-2004): CAN-SPAM Act of 2003”). Parts of this law was updated in 2008. In the update, the emails could comply with the law by including a P.O. box instead of a physical address of the sender. The update also made it clear that the unsubscribes shouldn’t pay a fee or provide his/her email during the opt-out process. Plus, it also made it clear that the opt-request could be only sent using a single webpage or by emailing for an optout (Fulcrumtech 2011).
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                The law addressed the immerging problem of spam. It set rules to commercial emailers that prohibited falsifying header and subject of the email saving people from clickbait. The law also gave customers the power to opt-out from email lists that they did not give their consent to receive. The law also supersedes many state laws like “highly restrictive California law” which prohibited commercial mass emailing (Kennedy& Christine 2016). The law also authorizes Federal trade commission (FTC) to create a “do-not-spam” list which saves the inbox space for the consumers who do not want to receive emails (“Stopping Unsolicited Mail, Phone Calls, and Email.”) . The law also makes the opt out feature accessible and forces it to work because of legal fines and imprisonment. This law protects the first amendment for stock emailers under freedom of speech (Hu, Bill, et al 2009).
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                The law only defined few types of spam emails. The law had many loopholes, due to which it was updated in 2008 (Fulcrumtech 2011). However, the update didn’t fix many problems. The law didn’t ban spammers but made it easier for spammers to follow a format to spam people. Therefore, making it much harder for spam emails to go down. The law also didn’t allow people to sue the spammers as a result if the spammer are not reported then they could continue violating the law) (Kigerl 2016). The law made it look that all the emails that followed the pattern were legal and credible. The law itself created a spam. Plus, federal trade commission also has a very loose application of the law due to which the credibility of messages are hard to identify (Hu, Bill, et al 2009).If the spammers were also identified then they could not be arrested or fined because most of the emails are sent from servers that doesn’t have a valid location and is mostly outside the US ) (Kigerl 2016).As a result, the number of spams has actually gone up contradicting the FTC findings  (Kigerl 2016). Though, FTC was the only organization to release the result, private organization showed that spams are increasing. Some spammers also have started to bypass the laws using pictures (Hu, Bill, et al 2009).
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                The law needs to include more spam types preventing scam at all. The law limits people’s ability to sue the commercial emailers, and this is abused by many unethical emailers. They do not use the opt-out feature properly, because it does not do what it says. So, there should be a provision in Law that the recipient has a right to sue if the senders do not accept their opt-out request. The law fails when the spammers use a foreign server or servers which have less credibility. The law makes it seem that all spammers are credible.  
                </Typography>

                {breakPara()}
                <Typography variant="paragraph">
                CAN-SPAM act as the name suggests allowed for spamming for the protection of first Amendement right of freedom of speech. The law is applicable for commercial emailers. The commercial emailers needed to follow certain guidelines in order to make the emails compatible with the law. The law supersedes many state laws and violation of this law is met with financial and imprisonment. The law needs update to implement it properly.
                </Typography>
                <Typography variant="paragraph"><span style={{
                    textDecoration:"underline"
                }}>Works Cited :</span></Typography>
                {breakPara()}
                <Typography variant="paragraph"><span style={{
                    textDecoration:"underline"
                }}>Works Cited :</span></Typography>

                {breakPara()}

                <Typography variant="body2">Kigerl, Alex C. “Deterring Spammers: Impact Assessment of the CAN SPAM Act on Email Spam Rates.” Criminal Justice Policy Review, vol. 27, no. 8, Dec. 2016, pp. 791–811, doi:10.1177/0887403414562604.</Typography>
                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">“Text - S.877 - 108th Congress (2003-2004): CAN-SPAM Act of 2003.” Congress.gov, 16 Dec. 2003, www.congress.gov/bill/108th-congress/senate-bill/877/text.</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">Kennedy, Charles H., and Christine E. Lyon. "The CAN-SPAM Act of 2003: A New Regime for Email Advertising." Computer and Internet Lawyer, vol. 21, no. 2, 2004, pp. 1-9. ProQuest, login.ezproxy.uta.edu/login?url=https://search-proquest-com.ezproxy.uta.edu/docview/222916064?accountid=7117.</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">fulcrumtech. “CAN-SPAM Act of 2003: Email Marketing and SPAM - What You Need to Know.” YouTube, Fulcrumtech, 29 Nov. 2011, www.youtube.com/watch?v=GD5SdhTS9rM.</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">"Opt out." Merriam-Webster.com. Merriam-Webster, n.d. Web. 19 Nov. 2018.
Hu, Bill, et al. “The CAN-SPAM Act of 2003 and Stock Spam Emails.” Financial Services Review, vol. 18, no. 1, Spring 2009, pp. 87–104. EBSCOhost, doi: academyfinancial.org/Abstracts.</Typography>
                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">“15 U.S. Code § 7703 - Prohibition against Predatory and Abusive Commercial e-Mail.” LII / Legal Information Institute, Legal Information Institute, www.law.cornell.edu/uscode/text/15/7703.</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2">US Legal, Inc. “Controlling the Assault of Non-Solicited Pornography and Marketing Act Law and Legal Definition.” Fraud Law and Legal Definition | USLegal, Inc., definitions.uslegal.com/c/controlling-the-assault-of-non-solicited-pornography-and-marketing-act..</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2"> “Stopping Unsolicited Mail, Phone Calls, and Email.” Consumer Information, 19 Oct. 2018, consumer.ftc.gov/articles/0262-stopping-unsolicited-mail-phone-calls-and-email.</Typography>

                <Box sx={{paddingTop:'2%'}}></Box>

                <Typography variant="body2"> Pry, Carl G. “Faxes and E-Mail: Don’t Forget the Opt Outs!” ABA Bank Marketing, vol. 41, no. 1, Jan. 2009, p. 56. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=bft&AN=510748526&site=ehost-live.</Typography>

                <div className='giscus'></div>
                <Footer/>
            </Container>
        </Box>
    )
}

export default CanSpam