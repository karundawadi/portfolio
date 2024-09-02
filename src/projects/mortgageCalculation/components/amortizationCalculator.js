export const calculateAmortization = (P, annualRate, years, extraPayment = 0) => {
    let monthlyRate = (annualRate / 100) / 12;
    let totalPayments = years * 12;
    let monthlyPayment = P * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);

    let newMonthlyPayment = monthlyPayment + parseFloat(extraPayment);

    let standardTable = [];
    let extraTable = [];
    let remainingPrincipalStandard = P;
    let remainingPrincipalExtra = P;

    let totalInterestStandard = 0;
    let totalInterestExtra = 0;

    let monthlySavings = [];

    // Standard Amortization Schedule
    for (let i = 1; i <= totalPayments && remainingPrincipalStandard > 0; i++) {
        let interestPayment = remainingPrincipalStandard * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;
        remainingPrincipalStandard -= principalPayment;
        totalInterestStandard += interestPayment;

        standardTable.push({
            month: i,
            monthlyPayment: monthlyPayment.toFixed(2),
            principalPayment: principalPayment.toFixed(2),
            interestPayment: interestPayment.toFixed(2),
            remainingBalance: Math.max(remainingPrincipalStandard, 0).toFixed(2) // Ensure non-negative balance
        });
    }

    // Amortization Schedule with Extra Payment
    for (let i = 1; i <= totalPayments && remainingPrincipalExtra > 0; i++) {
        let interestPayment = remainingPrincipalExtra * monthlyRate;
        let principalPayment = newMonthlyPayment - interestPayment;
        remainingPrincipalExtra -= principalPayment;
        totalInterestExtra += interestPayment;

        let monthSavings = i <= standardTable.length
            ? (standardTable[i - 1].monthlyPayment - newMonthlyPayment).toFixed(2)
            : '0.00';

        if (monthSavings !== '0.00') {
            monthlySavings.push({
                month: i,
                savings: monthSavings
            });
        }

        extraTable.push({
            month: i,
            monthlyPayment: newMonthlyPayment.toFixed(2),
            principalPayment: principalPayment.toFixed(2),
            interestPayment: interestPayment.toFixed(2),
            remainingBalance: Math.max(remainingPrincipalExtra, 0).toFixed(2) // Ensure non-negative balance
        });
    }

    return {
        standardTable,
        extraTable,
        totalInterestStandard,
        totalInterestExtra,
        monthlySavings
    };
};