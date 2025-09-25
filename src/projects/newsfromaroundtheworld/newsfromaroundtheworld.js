
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../website/navbar/navigationBar';
import { Helmet } from 'react-helmet';

const NewsFromAroundTheWorld = (props) => {
  const [gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.github.com/users/karundawadi/gists')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch gists');
        }
        return response.json();
      })
      .then(data => {
        setGists(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching gists:', error);
      });
  }, []);

  const formatTitle = (description) => {
    const match = description.match(/news summary for (\d{4}-\d{2}-\d{2})/);
    if (match) {
      const date = new Date(match[1]);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return `Need to know for ${formattedDate}`;
    }
    return description;
  };

  const extractDate = (description) => {
    const match = description.match(/news summary for (\d{4}-\d{2}-\d{2})/);
    if (match) {
      const date = new Date(match[1]);
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
    return null;
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

    const filteredGists = gists.filter(gist => gist.description);

    if (filteredGists.length === 0) {
      return (
        <Typography variant="h6" align="center">
          No articles found.
        </Typography>
      );
    }

    return (
      <TableContainer>
        <Table>
          {filteredGists.map(gist => (
            <TableRow
              hover
              key={gist.id}
              onClick={() => navigate(`/newsfromaroundtheworld/${gist.id}`)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>
                <Typography variant="h6">{formatTitle(gist.description)}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="text.secondary">
                  {extractDate(gist.description)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    );
  };

  return (
    <Box>
      <Helmet>
        <title>News From Around The World</title>
        <meta
          name="description"
          content="A collection of articles and gists from around the web."
        />
      </Helmet>
      <Container maxWidth="md">
        <NavigationBar dark={props.dark} changeMode={props.changeMode} />
        <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>

          {renderContent()}
        </Box>
      </Container>
    </Box>
  );
};

export default NewsFromAroundTheWorld;
