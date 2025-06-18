import React, { useState } from 'react';

interface CalculatorFormData {
  propertyValue: number;
  downPaymentRate: number;
  interestRate: number;
  loanTerm: number;
  monthlyRent: number;
  propertyTax: number;
  insurance: number;
  operatingExpensesRate: number;
  hoa: number;
  propertyManagementRate: number;
}

const RealEstateCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    propertyValue: 0,
    downPaymentRate: 20,
    interestRate: 0,
    loanTerm: 30,
    monthlyRent: 0,
    propertyTax: 0,
    insurance: 0,
    operatingExpensesRate: 5,
    hoa: 0,
    propertyManagementRate: 8,
  });

  const [results, setResults] = useState<{
    monthlyMortgage: number;
    monthlyExpenses: number;
    monthlyCashFlow: number;
    annualROI: number;
    cashOnCashReturn: number;
    capRate: number;
    downPayment: number;
  } | null>(null);

  const [error, setError] = useState<string>('');

  const calculateMortgage = (principal: number, rate: number, years: number): number => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check for any empty or NaN values
    const hasEmptyFields = Object.values(formData).some(value => 
      value === '' || isNaN(value as number)
    );

    if (hasEmptyFields) {
      setError('Please enter all fields');
      return;
    }

    const downPayment = (formData.propertyValue * formData.downPaymentRate) / 100;
    const loanAmount = formData.propertyValue - downPayment;
    const monthlyMortgage = calculateMortgage(
      loanAmount,
      formData.interestRate,
      formData.loanTerm
    );

    // Calculate annual values
    const annualRent = formData.monthlyRent * 12;
    const annualOperatingExpenses = (annualRent * formData.operatingExpensesRate) / 100;
    const annualPropertyTax = formData.propertyTax;
    const annualInsurance = formData.insurance;
    const annualHOA = formData.hoa;
    const annualPropertyManagement = (annualRent * formData.propertyManagementRate) / 100;
    const annualMortgage = monthlyMortgage * 12;

    // Calculate NOI (Net Operating Income)
    const annualNOI = annualRent - annualOperatingExpenses - annualPropertyTax - annualInsurance - annualHOA - annualPropertyManagement;

    // Calculate monthly expenses and cash flow
    const monthlyOperatingExpenses = (formData.monthlyRent * formData.operatingExpensesRate) / 100;
    const monthlyPropertyManagement = (formData.monthlyRent * formData.propertyManagementRate) / 100;
    const monthlyExpenses =
      monthlyMortgage + 
      formData.propertyTax / 12 + 
      formData.insurance / 12 + 
      monthlyOperatingExpenses + 
      formData.hoa / 12 + 
      monthlyPropertyManagement;
    const monthlyCashFlow = formData.monthlyRent - monthlyExpenses;

    // Calculate returns
    const annualROI = ((monthlyCashFlow * 12) / downPayment) * 100;
    const cashOnCashReturn = ((annualNOI - annualMortgage) / downPayment) * 100;
    const capRate = (annualNOI / formData.propertyValue) * 100;

    setResults({
      monthlyMortgage: monthlyMortgage || 0,
      monthlyExpenses: monthlyExpenses || 0,
      monthlyCashFlow: monthlyCashFlow || 0,
      annualROI: annualROI || 0,
      cashOnCashReturn: cashOnCashReturn || 0,
      capRate: capRate || 0,
      downPayment: downPayment || 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Remove any non-digit characters except decimal point
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Only update if there's a value, otherwise keep the field empty
    setFormData((prev) => ({
      ...prev,
      [name]: numericValue === '' ? '' : parseFloat(numericValue),
    }));
  };

  const formatCurrency = (value: number | ''): string => {
    if (value === '' || isNaN(value)) return '$0.00';
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatNumber = (value: number | ''): string => {
    if (value === '' || isNaN(value)) return '0';
    return value.toLocaleString();
  };

  return (
    <div className="calculator-container">
      <h2>Real Estate Investment Calculator</h2>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="propertyValue">Property Value ($)</label>
          <input
            type="text"
            id="propertyValue"
            name="propertyValue"
            value={formatNumber(formData.propertyValue)}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="downPaymentRate">Down Payment (%)</label>
          <input
            type="number"
            id="downPaymentRate"
            name="downPaymentRate"
            value={formData.downPaymentRate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            type="number"
            id="loanTerm"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyRent">Monthly Rent ($)</label>
          <input
            type="text"
            id="monthlyRent"
            name="monthlyRent"
            value={formatNumber(formData.monthlyRent)}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="operatingExpensesRate">Vacancy and Maintenance (%)</label>
          <input
            type="number"
            id="operatingExpensesRate"
            name="operatingExpensesRate"
            value={formData.operatingExpensesRate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyManagementRate">Property Management (%)</label>
          <input
            type="number"
            id="propertyManagementRate"
            name="propertyManagementRate"
            value={formData.propertyManagementRate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyTax">Annual Property Tax ($)</label>
          <input
            type="text"
            id="propertyTax"
            name="propertyTax"
            value={formatNumber(formData.propertyTax)}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="insurance">Annual Insurance ($)</label>
          <input
            type="text"
            id="insurance"
            name="insurance"
            value={formatNumber(formData.insurance)}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoa">Annual HOA ($)</label>
          <input
            type="text"
            id="hoa"
            name="hoa"
            value={formatNumber(formData.hoa)}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {results && (
        <div className="results">
          <h3>Investment Analysis</h3>
          <div className="result-item">
            <span>Down Payment Amount:</span>
            <span>{formatCurrency(results.downPayment)}</span>
          </div>
          <div className="result-item">
            <span>Monthly Mortgage Payment:</span>
            <span>{formatCurrency(results.monthlyMortgage)}</span>
          </div>
          <div className="result-item">
            <span>Total Monthly Expenses:</span>
            <span>{formatCurrency(results.monthlyExpenses)}</span>
          </div>
          <div className="result-item">
            <span>Monthly Cash Flow:</span>
            <span>{formatCurrency(results.monthlyCashFlow)}</span>
          </div>
          <div className="result-item">
            <span>Annual ROI:</span>
            <span>{results.annualROI.toFixed(2)}%</span>
          </div>
          <div className="result-item">
            <span>Cash on Cash Return:</span>
            <span>{results.cashOnCashReturn.toFixed(2)}%</span>
          </div>
          <div className="result-item">
            <span>Cap Rate:</span>
            <span>{results.capRate.toFixed(2)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstateCalculator; 