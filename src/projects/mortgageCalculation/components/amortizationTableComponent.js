import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import {
    MONTH,
    YEAR,
    STANDARD_PRINCIPAL_PAYMENT,
    STANDARD_INTEREST_PAYMENT,
    STANDARD_REMAINING_BALANCE,
    EXTRA_INTEREST_PAYMENT,
    INTEREST_DIFFERENCE,
    EXTRA_REMAINING_BALANCE,
    PRINCIPAL_DIFFERENCE,
    TOTAL_INTEREST_WITHOUT_EXTRA,
    TOTAL_INTEREST_WITH_EXTRA,
    TOTAL_SAVINGS,
  } from "./constants";
  
  // Styled Components
  const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    maxHeight: 600,
  }));
  
  const StyledTable = styled(Table)(({ theme }) => ({
    minWidth: 650,
    borderCollapse: "collapse",
  }));
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    textAlign: "right",
  }));
  
  const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey[200],
    fontWeight: "bold",
    border: `1px solid ${theme.palette.divider}`,
    textAlign: "right",
    position: "sticky",
    top: 0,
    zIndex: 1,
  }));
  
  // Bar visualization component
  const BarGraph = ({ remainingBalance, totalAmount }) => {
    const remainingPercentage = (remainingBalance / totalAmount) * 100;
    const paidPercentage = 100 - remainingPercentage;
  
    return (
      <Box display="flex" height={20}>
        <Box
          width={`${paidPercentage}%`}
          bgcolor="green"
          height="100%"
          title={`Paid: ${paidPercentage.toFixed(2)}%`}
        />
        <Box
          width={`${remainingPercentage}%`}
          bgcolor="red"
          height="100%"
          title={`Remaining: ${remainingPercentage.toFixed(2)}%`}
        />
      </Box>
    );
  };
  
  // Amortization Table Header Component
  const AmortizationTableHeader = () => (
    <TableHead>
      <TableRow>
        <StyledTableHeadCell>{MONTH}</StyledTableHeadCell>
        <StyledTableHeadCell>{YEAR}</StyledTableHeadCell>
        <StyledTableHeadCell>{STANDARD_PRINCIPAL_PAYMENT}</StyledTableHeadCell>
        <StyledTableHeadCell>{STANDARD_INTEREST_PAYMENT}</StyledTableHeadCell>
        <StyledTableHeadCell>{EXTRA_INTEREST_PAYMENT}</StyledTableHeadCell>
        <StyledTableHeadCell>{INTEREST_DIFFERENCE}</StyledTableHeadCell>
        <StyledTableHeadCell>{STANDARD_REMAINING_BALANCE}</StyledTableHeadCell>
        <StyledTableHeadCell>{EXTRA_REMAINING_BALANCE}</StyledTableHeadCell>
        <StyledTableHeadCell>{PRINCIPAL_DIFFERENCE}</StyledTableHeadCell>
      </TableRow>
    </TableHead>
  );
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };
  
  // Amortization Table Row with Bar Graph
  const AmortizationTableRow = ({ standardRow, extraRow, totalAmount }) => (
    <TableRow>
      {/* Month */}
      <StyledTableCell>{standardRow.month}</StyledTableCell>
      <StyledTableCell>{(standardRow.month / 12).toFixed(2)}</StyledTableCell>
  
      {/* Payments */}
      <StyledTableCell>
        {formatCurrency(standardRow.monthlyPayment)}
      </StyledTableCell>
      <StyledTableCell>
        {formatCurrency(standardRow.interestPayment)}
      </StyledTableCell>
  
      {/* Extra Row Interest Payment (or fallback) */}
      {extraRow ? (
        <StyledTableCell>
          {formatCurrency(extraRow.interestPayment)}
        </StyledTableCell>
      ) : (
        <StyledTableCell colSpan={1}>-</StyledTableCell>
      )}
  
      {/* Interest Savings (or fallback) */}
      {extraRow ? (
        <StyledTableCell>
          {formatCurrency(standardRow.interestPayment - extraRow.interestPayment)}
        </StyledTableCell>
      ) : (
        <StyledTableCell colSpan={1}>-</StyledTableCell>
      )}
  
      {/* Standard Remaining Balance */}
      <StyledTableCell>
        {formatCurrency(standardRow.remainingBalance)}
        <BarGraph
          remainingBalance={standardRow.remainingBalance}
          totalAmount={totalAmount}
        />
      </StyledTableCell>
  
      {/* Extra Row Remaining Balance (or fallback) */}
      {extraRow ? (
        <StyledTableCell>
          {formatCurrency(extraRow.remainingBalance)}
          <BarGraph
            remainingBalance={extraRow.remainingBalance}
            totalAmount={totalAmount}
          />
        </StyledTableCell>
      ) : (
        <StyledTableCell colSpan={1}>-</StyledTableCell>
      )}
  
      {/* Balance Reduction (or fallback) */}
      {extraRow ? (
        <StyledTableCell>
          {formatCurrency(
            standardRow.remainingBalance - extraRow.remainingBalance
          )}
        </StyledTableCell>
      ) : (
        <StyledTableCell colSpan={1}>-</StyledTableCell>
      )}
    </TableRow>
  );
  
  const SavingsSummary = ({ savings }) => (
    <Box mt={2}>
      <Typography variant="h6">
        {TOTAL_INTEREST_WITHOUT_EXTRA}:{" "}
        {formatCurrency(savings.totalInterestStandard)}
      </Typography>
      <Typography variant="h6">
        {TOTAL_INTEREST_WITH_EXTRA}: {formatCurrency(savings.totalInterestExtra)}
      </Typography>
      <Typography variant="h6">
        {TOTAL_SAVINGS}: {formatCurrency(savings.totalSavings)}
      </Typography>
    </Box>
  );
  
  export const AmortizationTable = ({ standardTable, extraTable, savings }) => {
    const totalAmount = standardTable[0].remainingBalance; // Assuming this is the initial loan amount
  
    return (
      <>
        <StyledTableContainer component={Paper}>
          <StyledTable>
            <AmortizationTableHeader />
            <TableBody>
              {standardTable.map((row, index) => (
                <AmortizationTableRow
                  key={row.month}
                  standardRow={row}
                  extraRow={extraTable[index]}
                  totalAmount={totalAmount}
                />
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
  
        <SavingsSummary savings={savings} />
      </>
    );
  };
  