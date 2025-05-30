import React from "react";
import { 
  Container, 
  Box, 
  Typography, 
  Divider,
  Paper,
  useTheme
} from "@mui/material";
import Footer from "../../footer/footer.js";
import ProjectRow from "../../navbar/project row/project_row.js";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArticlesExcludedFromComments } from "./AllBlogs.js";

function renderContentItem(item, index, theme) {
  switch (item.type) {
    case "paragraph":
      return (
        <Typography 
          key={index} 
          variant="body1" 
          sx={{ 
            paddingTop: "1rem",
            lineHeight: 1.8,
            fontSize: '1rem',
            letterSpacing: '0.01em',
            '&:first-of-type::first-letter': {
              fontSize: '3rem',
              lineHeight: '1',
              fontWeight: 'bold',
              float: 'left',
              paddingRight: '0.5rem',
              color: theme.palette.mode === 'dark' ? 'white' : 'black'
            }
          }}
        >
          {item.text}
        </Typography>
      );
    case "image":
      return (
        <Box
          key={index}
          sx={{
            my: 4,
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: theme.shadows[theme.palette.mode === 'dark' ? 1 : 4]
          }}
        >
          <Box
            component="img"
            src={item.src}
            alt={item.alt}
            sx={{
              width: "100%",
              display: 'block',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          />
          {item.caption && (
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'center',
                mt: 1,
                color: 'text.secondary'
              }}
            >
              {item.caption}
            </Typography>
          )}
        </Box>
      );
    case "code":
      return (
        <Paper 
          key={index}
          elevation={theme.palette.mode === 'dark' ? 1 : 2}
          sx={{
            my: 3,
            borderRadius: '8px',
            overflow: 'hidden',
            bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'grey.50'
          }}
        >
          <SyntaxHighlighter
            language={item.language || "javascript"}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: '8px',
              padding: '1.5rem',
              backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : '#2D2D2D'
            }}
          >
            {item.code}
          </SyntaxHighlighter>
        </Paper>
      );
    case "video":
      return (
        <Box 
          key={index} 
          sx={{ 
            my: 4,
            position: 'relative',
            paddingTop: '56.25%', // 16:9 Aspect Ratio
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: theme.shadows[theme.palette.mode === 'dark' ? 1 : 4]
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src={item.src}
            title={item.title}
            allowFullScreen
          />
        </Box>
      );
    case "heading":
      return (
        <Typography
          key={index}
          variant="h5"
          sx={{
            mt: 4,
            mb: 2,
            fontWeight: 500,
            position: 'relative',
            fontSize: '1.25rem',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-6px',
              left: 0,
              width: '60px',
              height: '3px',
              backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
              borderRadius: '2px'
            }
          }}
        >
          {item.text}
        </Typography>
      );
    case "underlined":
      return (
        <Typography
          key={index}
          variant="h5"
          sx={{ 
            mt: 4,
            mb: 2,
            fontWeight: 600,
            textDecoration: "underline",
            textDecorationColor: theme.palette.mode === 'dark' ? 'white' : 'black',
            textDecorationThickness: '2px',
            textUnderlineOffset: '4px'
          }}
        >
          {item.text}
        </Typography>
      );
    case "citation":
      return (
        <Typography 
          key={index}
          variant="body2"
          sx={{ 
            pl: 3,
            my: 2,
            borderLeft: `2px solid ${theme.palette.divider}`,
            color: 'text.secondary',
            fontSize: '0.875rem',
            lineHeight: 1.6
          }}
        >
          {item.text}
        </Typography>
      );
    default:
      return null;
  }
}

function BlogRenderer(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Helmet>
        <title>{props.articleData.title}</title>
        {props.articleData.summary && (
          <meta name="description" content={props.articleData.summary} />
        )}
        {props.articleData.keywords && (
          <meta name="keywords" content={props.articleData.keywords.join(",")} />
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
          variant="h2"
          onClick={() => navigate("/")}
          fontWeight={500}
          align="center"
          sx={{ 
            cursor: 'pointer',
            fontSize: '3rem',
            mb: 1,
            '&:hover': {
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
            }
          }}
        >
          Karun Dawadi
        </Typography>
        <ProjectRow dark={props.dark} changeMode={props.changeMode} />
        
        <Box sx={{ py: 3 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 500,
              mb: 1,
              fontSize: '1.5rem'
            }}
          >
            {props.articleData.title}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            mb: 2,
            color: 'text.secondary'
          }}>
            {props.articleData.author && (
              <Typography 
                variant="subtitle1"
                sx={{ fontSize: '0.875rem' }}
              >
                By {props.articleData.author}
              </Typography>
            )}
            <Typography 
              variant="subtitle1"
              sx={{ fontSize: '0.875rem' }}
            >
              {new Date(props.articleData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </Typography>
          </Box>

          {props.articleData.summary && (
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                mb: 3,
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                borderLeft: `3px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
                borderRadius: '4px'
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  fontSize: '0.875rem'
                }}
              >
                {props.articleData.summary}
              </Typography>
            </Paper>
          )}

          <Divider sx={{ mb: 3 }} />

          <Box className="blog-content">
            {props.articleData.content.map((item, index) =>
              renderContentItem(item, index, theme)
            )}
          </Box>

          {!ArticlesExcludedFromComments.includes(props.articleData.title) && (
            <Box className="blog-comments" sx={{ mt: 4 }}>
              {/* Comments component will be added here */}
            </Box>
          )}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}

export default BlogRenderer;
