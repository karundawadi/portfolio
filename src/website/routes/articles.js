import { Container, Box, Typography } from "@mui/material";
import ProjectRow from "../navbar/project row/project_row";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { TableRow, TableContainer, TableCell, Table } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { AllBlogs } from "../bodyComponents/blogs/AllBlogs";

function Articles(props) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedArticles, setDisplayedArticles] = useState(AllBlogs);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredArticles = AllBlogs.filter((article) =>
      article.data.title.toLowerCase().includes(lowercasedQuery)
    );

    // Sorting by date, newest first
    const sortedArticles = filteredArticles.sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date)
    );
    
    setDisplayedArticles(sortedArticles);
  }, [searchQuery]);

  return (
    <Box style={{}}>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          onClick={() => {
            window.open("/", "_self");
          }}
          fontWeight={335}
          align={"center"}
        >
          Karun Dawadi
        </Typography>
        <ProjectRow dark={props.dark} changeMode={props.changeMode} />
        <Box sx={{ paddingTop: "2%" }}></Box>
        <Grid container justifyContent="flex-end" sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
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
                style: {
                  height: "100%",
                },
              }}
              autoComplete="false"
              autoCorrect="false"
              autoFocus="false"
              name={`search-${Math.random()}`}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "1",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px 14px",
                },
                "& .MuiInputAdornment-root": {
                  marginTop: "0px", // Adjust to align properly with the text if needed
                },
              }}
            />
          </Grid>
        </Grid>
        <TableContainer>
          <Table>
            {displayedArticles
            .filter(article => !article.data.hidden)
            .map((article) => (
              <TableRow
                key={article.path}
                hover
                onClick={() => navigate(article.path)}
              >
                <TableCell align="left">{article.data.title}</TableCell>
                <TableCell align="right">
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
