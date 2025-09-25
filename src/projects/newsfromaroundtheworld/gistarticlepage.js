
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import {
  Container,
  Box,
  Typography,
  Divider,
  Paper,
  useTheme,
  CircularProgress,
  Link
} from "@mui/material";
import Footer from "../../website/footer/footer.js";
import ProjectRow from "../../website/navbar/project row/project_row.js";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const GistArticlePage = (props) => {
  const [content, setContent] = useState('');
  const [gist, setGist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { gistId } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/gists/${gistId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch gist');
        }
        return response.json();
      })
      .then(data => {
        setGist(data);
        const file = Object.values(data.files)[0];
        if (file) {
          fetch(file.raw_url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch gist content');
              }
              return response.text();
            })
            .then(data => {
              setContent(data);
              setLoading(false);
            })
            .catch(error => {
              setError(error.message);
              setLoading(false);
              console.error('Error fetching gist content:', error);
            });
        } else {
          setError('No files found in gist');
          setLoading(false);
        }
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching gist:', error);
      });
  }, [gistId]);

  const MarkdownOptions = {
    overrides: {
      h1: { component: Typography, props: { variant: 'h3', gutterBottom: true, sx: { mt: 3 } } },
      h2: { component: Typography, props: { variant: 'h4', gutterBottom: true, sx: { mt: 3 } } },
      h3: { component: Typography, props: { variant: 'h5', gutterBottom: true, sx: { mt: 2 } } },
      h4: { component: Typography, props: { variant: 'h6', gutterBottom: true, sx: { mt: 2 } } },
      h5: { component: Typography, props: { variant: 'subtitle1', gutterBottom: true, sx: { mt: 1 } } },
      h6: { component: Typography, props: { variant: 'subtitle2', gutterBottom: true, sx: { mt: 1 } } },
      p: { component: Typography, props: { variant: 'body1', paragraph: true, sx: { lineHeight: 1.7 } } },
      a: { component: Link, props: { target: '_blank', rel: 'noopener', color: 'primary.main' } },
      ul: { component: Typography, props: { component: 'ul', sx: { pl: 4, mt: 2, mb: 2 } } },
      ol: { component: Typography, props: { component: 'ol', sx: { pl: 4, mt: 2, mb: 2 } } },
      li: { component: Typography, props: { component: 'li', sx: { mb: 1 } } },
      blockquote: { component: Box, props: { sx: { borderLeft: '4px solid', borderColor: 'primary.main', pl: 2, fontStyle: 'italic', my: 2, py: 0.5 } } },
      code: { component: Typography, props: { component: 'span', sx: { bgcolor: 'action.hover', p: 0.5, borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.9rem' } } },
      pre: { component: Box, props: { sx: { bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100', color: theme.palette.mode === 'dark' ? 'white' : 'text.primary', p: 2, borderRadius: '4px', overflowX: 'auto', my: 2, fontFamily: 'monospace', fontSize: '0.9rem', border: `1px solid ${theme.palette.divider}` } } },
      img: { component: 'img', props: { style: { maxWidth: '100%', height: 'auto', display: 'block', margin: '16px auto' } } },
    },
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      return (
        <Typography variant="h6" color="error" align="center">
          Error: {error}
        </Typography>
      );
    }

    if (!gist) {
      return (
        <Typography variant="h6" align="center">
          Gist not found.
        </Typography>
      );
    }

    return (
      <>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            mb: 1,
          }}
        >
          {gist.description || 'No Title'}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            color: 'text.secondary'
          }}
        >
          {gist.owner && (
            <Typography
              variant="subtitle1"
              sx={{ fontSize: '0.875rem' }}
            >
              By {gist.owner.login}
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '0.875rem' }}
          >
            {new Date(gist.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: -3,
          }}
        >
          <Markdown options={MarkdownOptions}>{content}</Markdown>
        </Paper>
      </>
    );
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {gist && (
        <Helmet>
          <title>{gist.description || 'Gist Article'}</title>
          <meta name="description" content={gist.description || 'A gist article.'} />
        </Helmet>
      )}
      <Container maxWidth="md">
        <Typography
          variant="h4"
          onClick={() => navigate("/")}
          fontWeight={500}
          align="center"
          sx={{
            cursor: 'pointer',
            fontSize: '2rem',
            mb: 1,
            '&:hover': {
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
            }
          }}
        >
          Karun Dawadi
        </Typography>
        <ProjectRow dark={props.dark} changeMode={props.changeMode} />

        <Box sx={{ pt: 4, pb: 0 }}>
          {renderContent()}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default GistArticlePage;
