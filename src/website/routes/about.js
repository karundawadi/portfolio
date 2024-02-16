import React from "react";
import { Container, Box } from "@mui/material";
import Introduciton from "../bodyComponents/Introduction/introduction";
import Kala from "../bodyComponents/kala/kala";
import NavigationBar from "../navbar/navigationBar";
import { Helmet } from "react-helmet";

function About(props) {
  return (
    <Box style={{}}>
      <Helmet>
        <title>About Me</title>
        <title>
          Karun Dawadi - Software Engineer and Tech Blogger | Innovating with
          Code
        </title>
        <meta
          name="description"
          content="Meet Karun Dawadi, a passionate Software Engineer with a Computer Science degree from the University of Texas at Arlington, specializing in innovative software projects and tech industry insights. Discover his work and read his latest technology articles."
        />
        <meta
          name="keywords"
          content="Karun Dawadi, Software Engineer, Software Development Projects, Computer Science Graduate, University of Texas at Arlington Alumni, Tech Industry Insights, Technology Articles, Innovative Software Solutions, Coding Tutorials, Technology Expert"
        />
      </Helmet>
      <Container maxWidth="md">
        <NavigationBar dark={props.dark} changeMode={props.changeMode} />
        <Box sx={{ paddingTop: "2%" }}></Box>
        <Introduciton />
        <Kala />
      </Container>
    </Box>
  );
}

export default About;
