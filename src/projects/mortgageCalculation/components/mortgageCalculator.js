import React, { useState } from 'react';
import { MORTGAGE_CALCULATOR, VERSION_NUMBER} from './constants';
import { MortgageForm } from './mortgageForm';
import { calculateAmortization } from './amortizationCalculator';
import { AmortizationTable } from './amortizationTableComponent';
import { Typography } from '@mui/material';

const MortgageCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [annualRate, setAnnualRate] = useState('');
    const [years, setYears] = useState('');
    const [extraPayment, setExtraPayment] = useState('');
    const [schedule, setSchedule] = useState({ standardTable: [], extraTable: [] });
    const [savings, setSavings] = useState({ totalInterestStandard: 0, totalInterestExtra: 0, totalSavings: 0});

    const handleSubmit = () => {
        if (principal && annualRate && years) {
            const tables = calculateAmortization(parseFloat(principal), parseFloat(annualRate), parseInt(years), parseFloat(extraPayment));
            setSchedule(tables);
            setSavings({
                totalInterestStandard: tables.totalInterestStandard.toFixed(2),
                totalInterestExtra: tables.totalInterestExtra.toFixed(2),
                totalSavings: (tables.totalInterestStandard - tables.totalInterestExtra).toFixed(2),
            });
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                {MORTGAGE_CALCULATOR} {VERSION_NUMBER}
            </Typography>
            <MortgageForm
                principal={principal}
                setPrincipal={setPrincipal}
                annualRate={annualRate}
                setAnnualRate={setAnnualRate}
                years={years}
                setYears={setYears}
                extraPayment={extraPayment}
                setExtraPayment={setExtraPayment}
                handleSubmit={handleSubmit}
            />
            {schedule.standardTable.length > 0 && (
                <AmortizationTable
                    standardTable={schedule.standardTable}
                    extraTable={schedule.extraTable}
                    savings={savings}
                />
            )}
        </div>
    );
};

export default MortgageCalculator;