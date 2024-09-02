import { useEffect, useState } from 'react';
import { PRINCIPAL, ANNUAL_INTEREST_RATE, YEARS_TO_PAYOFF, EXTRA_AMOUNT_OF_PAYMENT_PER_MONTH, CALCULATE } from './constants';
import { TextField, Button, Box } from '@mui/material';

const formatCurrency = (value) => {
  if (!value) return '';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
};

const parseCurrency = (value) => value.replace(/[^0-9.]/g, '');

const saveToCache = (key, value) => {
  localStorage.setItem(key, value);
};

const getFromCache = (key, defaultValue = '') => localStorage.getItem(key) || defaultValue;

export const MortgageForm = ({
  principal,
  setPrincipal,
  annualRate,
  setAnnualRate,
  years,
  setYears,
  extraPayment,
  setExtraPayment,
  handleSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Load saved values from cache when the component mounts
  useEffect(() => {
    if (isLoading) {
      const cachedPrincipal = getFromCache('principal');
      const cachedAnnualRate = getFromCache('annualRate');
      const cachedYears = getFromCache('years');
      const cachedExtraPayment = getFromCache('extraPayment');

      // Update state if necessary
      if (cachedPrincipal && cachedPrincipal !== principal) setPrincipal(cachedPrincipal);
      if (cachedAnnualRate && cachedAnnualRate !== annualRate) setAnnualRate(cachedAnnualRate);
      if (cachedYears && cachedYears !== years) setYears(cachedYears);
      if (cachedExtraPayment && cachedExtraPayment !== extraPayment) setExtraPayment(cachedExtraPayment);

      setIsLoading(false); // Mark that the initial load has been completed
    }
  }, [isLoading, setPrincipal, setAnnualRate, setYears, setExtraPayment, principal, annualRate, years, extraPayment]);

  // Save values to cache whenever they change, only after initial load is complete
  useEffect(() => {
    if (!isLoading) {
      saveToCache('principal', principal);
      saveToCache('annualRate', annualRate);
      saveToCache('years', years);
      saveToCache('extraPayment', extraPayment);
    }
  }, [isLoading, principal, annualRate, years, extraPayment]);

  return (
    <Box mb={2}>
      {/* Principal Field with Dollar Formatting */}
      <TextField
        label={PRINCIPAL}
        value={formatCurrency(principal)}
        onChange={(e) => setPrincipal(parseCurrency(e.target.value))}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* Annual Interest Rate */}
      <TextField
        label={ANNUAL_INTEREST_RATE}
        type="number"
        value={annualRate}
        onChange={(e) => setAnnualRate(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* Years to Payoff */}
      <TextField
        label={YEARS_TO_PAYOFF}
        type="number"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* Extra Payment Field with Dollar Formatting */}
      <TextField
        label={EXTRA_AMOUNT_OF_PAYMENT_PER_MONTH}
        value={formatCurrency(extraPayment)}
        onChange={(e) => setExtraPayment(parseCurrency(e.target.value))}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
        {CALCULATE}
      </Button>
    </Box>
  );
};
