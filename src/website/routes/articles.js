import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  TextField,
  TableContainer,
  TableCell,
  Table,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ProjectRow from "../navbar/project row/project_row";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";
import { AllBlogs } from "../bodyComponents/blogs/AllBlogs";

function Articles(props) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [labelFilter, setLabelFilter] = useState("");
  const [displayedArticles, setDisplayedArticles] = useState(AllBlogs);
  const [uniqueLabels, setUniqueLabels] = useState([]);

  useEffect(() => {
    let filteredArticles = AllBlogs.filter((article) =>
      article.data.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (labelFilter) {
      filteredArticles = filteredArticles.filter((article) =>
        article.data.labels.includes(labelFilter)
      );
    }

    const sortedArticles = filteredArticles.sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date)
    );

    setDisplayedArticles(sortedArticles);

    // Exclude articles with hidden attribute set to true
    const visibleArticles = AllBlogs.filter((article) => !article.data.hidden);
    const labels = visibleArticles.map((article) => article.data.labels).flat();
    setUniqueLabels([...new Set(labels)]);
  }, [searchQuery, labelFilter]);

  const handleLabelClick = (label) => {
    setSearchQuery("");
    setLabelFilter(label);
  };

  return (
    <Box>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          onClick={() => {
            window.open("/", "_self");
          }}
          fontWeight={500}
          align={"center"}
        >
          Karun Dawadi
        </Typography>
        <ProjectRow dark={props.dark} changeMode={props.changeMode} />
        <Box sx={{ pt: 2 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              item
              xs={12}
              sm={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                pt: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexGrow: 1,
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {uniqueLabels.map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    onClick={() => handleLabelClick(label)}
                    style={{ margin: "5px" }}
                    variant={label === labelFilter ? "outlined" : "default"}
                  />
                ))}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}
            >
              <TextField
                label="Search articles..."
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: { height: "100%" },
                }}
                autoComplete="off"
                autoCorrect="off"
                name={`search-${Math.random()}`}
              />
            </Grid>
          </Grid>
        </Box>

        {labelFilter && (
          <Box sx={{ mb: 2, paddingTop: "2%" }}>
            <Button
              variant="outlined"
              onClick={() => setLabelFilter("")}
              sx={{
                fontSize: "0.875rem",
                padding: "8px 16px",
                borderRadius: "8px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 500,
                borderColor: 'text.primary',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'text.primary',
                  backgroundColor: 'action.hover'
                }
              }}
            >
              Clear filter: {labelFilter}
            </Button>
          </Box>
        )}
        <TableContainer>
          <Table>
            {displayedArticles
              .filter((article) => !article.data.hidden)
              .map((article) => (
                <TableRow
                  hover
                  key={article.path}
                  onClick={() => navigate(article.path)}
                >
                  <TableCell align="left">
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Typography variant="h6">{article.data.title}</Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'text.secondary',
                            backgroundColor: 'action.hover',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}
                        >
                          {new Date(article.data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })}
                        </Typography>
                      </Box>
                      {article.data.summary && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {article.data.summary}
                        </Typography>
                      )}
                      {article.data.labels && article.data.labels.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                          {article.data.labels.map((label) => (
                            <Chip
                              key={label}
                              label={label}
                              size="small"
                              onClick={() => handleLabelClick(label)}
                              style={{ marginRight: "8px", marginBottom: "8px" }}
                              variant={label === labelFilter ? "outlined" : "default"}
                            />
                          ))}
                        </Box>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ display: 'none' }}>
                    {/* Hiding the old date column */}
                    {new Date(article.data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                </TableRow>
              ))}
          </Table>
        </TableContainer>
        <Footer />
      </Container>
    </Box>
  );
}

export default Articles;
