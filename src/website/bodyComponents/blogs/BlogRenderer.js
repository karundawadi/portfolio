import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Footer from "../../footer/footer.js";
import ProjectRow from "../../navbar/project row/project_row.js";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function renderContentItem(item, index) {
  switch (item.type) {
    case "paragraph":
      return (
        <Typography key={index} variant="body1" sx={{ paddingTop: "1%" }}>
          {item.text}
        </Typography>
      );
    case "image":
      return (
        <Box
          key={index}
          component="img"
          src={item.src}
          alt={item.alt}
          sx={{ width: "100%", paddingTop: "2%" }}
        />
      );
    case "code":
      return (
        <SyntaxHighlighter
          key={index}
          language={item.language || "javascript"}
          style={vscDarkPlus}
          customStyle={{
            backgroundColor: "#000",
            marginTop: "20px",
            borderRadius: "4px",
            overflowX: "auto",
          }}
        >
          {item.code}
        </SyntaxHighlighter>
      );
    case "video":
      return (
        <Box key={index} sx={{ paddingTop: "2%" }}>
          <iframe
            width="560"
            height="315"
            src={item.src}
            title={item.title}
            allowFullScreen
          ></iframe>
        </Box>
      );
    case "heading":
      return (
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ paddingTop: "2%" }}
        >
          {item.text}
        </Typography>
      );
    case "underlined":
      return (
        <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
          <Typography variant="paragraph">
            <span style={{ textDecoration: "underline" }}>{item.text}</span>
          </Typography>
        </Box>
      );
    case "citation":
      return (
        <Box sx={{ paddingTop: "1%" }}>
          <Typography variant="body2">{item.text}</Typography>
        </Box>
      );
    default:
      return null;
  }
}

function BlogRenderer(props) {
  const navigate = useNavigate();

  return (
    <Box>
      <Helmet>
        <title>{props.articleData.title}</title>
        {props.articleData.summary && (
          <meta name="description" content={props.articleData.summary} />
        )}
        {props.articleData.keywords && (
          <meta
            name="keywords"
            content={props.articleData.keywords.join(",")}
          />
        )}
        {props.articleData.author && (
          <meta name="author" content={props.articleData.author} />
        )}
        {props.articleData.description && (
          <meta name="description" content={props.articleData.description} />
        )}
      </Helmet>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          onClick={() => navigate("/")}
          fontWeight={335}
          align={"center"}
        >
          Karun Dawadi
        </Typography>
        <ProjectRow dark={props.dark} changeMode={props.changeMode} />
        <Box
          sx={{
            paddingTop: "2%",
          }}
        >
          <Typography variant="h5">{props.articleData.title}</Typography>
          <Typography variant="subtitle2">
            Published on {props.articleData.date}
          </Typography>
        </Box>
        {props.articleData.content.map((item, index) =>
          renderContentItem(item, index)
        )}
        <Footer />
      </Container>
    </Box>
  );
}

export default BlogRenderer;
