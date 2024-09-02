import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function StockSnapshot() {
  const VERSION_NUMBER = "1.0.0";
  const [price, setPrice] = useState("");
  const [percentages, setPercentages] = useState({
    "0.25%": { positive: "", negative: "" },
    "0.5%": { positive: "", negative: "" },
    "1%": { positive: "", negative: "" },
    "1.25%": { positive: "", negative: "" },
    "1.5%": { positive: "", negative: "" },
    "1.75%": { positive: "", negative: "" },
    "2%": { positive: "", negative: "" },
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const calculatePercentages = () => {
    const priceFloat = parseFloat(price);
    const percentageValues = [0.0025, 0.005, 0.01, 0.0125, 0.015, 0.0175, 0.02];
    const updatedPercentages = {};
    percentageValues.forEach((percentage) => {
      updatedPercentages[(percentage * 100).toFixed(2) + "%"] = {
        positive: (priceFloat * (1 + percentage)).toFixed(2),
        negative: (priceFloat * (1 - percentage)).toFixed(2),
      };
    });
    setPercentages(updatedPercentages);
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      style={{
        padding: isMobile ? "16px" : "32px",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          style={{ color: theme.palette.primary.main, marginBottom: "20px" }}
        >
          Stock Snapshot v{VERSION_NUMBER}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          label="Enter Stock Price"
          variant="outlined"
          fullWidth
          value={price}
          onChange={handleChange}
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          style={{ borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={calculatePercentages}
          style={{
            borderRadius: "8px",
            marginTop: "20px",
            padding: "14px 28px",
            fontSize: "18px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            transition: "background-color 0.3s",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            width: "auto", // Set width to auto
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Calculate Percentages
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            style={{ color: theme.palette.primary.main }}
          >
            Calculated Prices with Percentages
          </Typography>
          <TableContainer style={{ marginTop: "16px" }}>
            <Table>
              <TableBody>
                <TableRow
                  style={{ backgroundColor: theme.palette.action.hover }}
                >
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                    }}
                  >
                    Percentage
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                    }}
                  >
                    🔽
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                    }}
                  >
                    🔼
                  </TableCell>
                </TableRow>
                {Object.entries(percentages).map(
                  ([percentage, values], index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? theme.palette.action.hover
                            : "transparent",
                      }}
                    >
                      <TableCell align="center" style={{ fontWeight: 'bold' }}>{percentage}</TableCell>
                      <TableCell
                        align="center"
                        style={{
                          fontWeight: "bold",
                          color: "lightcoral", // Light red color
                        }}
                      >
                        {values.negative}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          fontWeight: "bold",
                          color: "darkgreen", // Dark green color
                        }}
                      >
                        {values.positive}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default StockSnapshot;
