import React, { useState } from 'react';

interface CalculatorFormData {
  propertyValue: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  monthlyRent: number;
  propertyTax: number;
  insurance: number;
  maintenance: number;
}

const RealEstateCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    propertyValue: 0,
    downPayment: 0,
    interestRate: 0,
    loanTerm: 30,
    monthlyRent: 0,
    propertyTax: 0,
    insurance: 0,
    maintenance: 0,
  });

  const [results, setResults] = useState<{
    monthlyMortgage: number;
    monthlyExpenses: number;
    monthlyCashFlow: number;
    annualROI: number;
  } | null>(null);

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
    const loanAmount = formData.propertyValue - formData.downPayment;
    const monthlyMortgage = calculateMortgage(
      loanAmount,
      formData.interestRate,
      formData.loanTerm
    );
    const monthlyExpenses =
      monthlyMortgage + formData.propertyTax / 12 + formData.insurance / 12 + formData.maintenance;
    const monthlyCashFlow = formData.monthlyRent - monthlyExpenses;
    const annualROI = ((monthlyCashFlow * 12) / formData.downPayment) * 100;

    setResults({
      monthlyMortgage,
      monthlyExpenses,
      monthlyCashFlow,
      annualROI,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  return (
    <div className="calculator-container">
      <h2>Real Estate Investment Calculator</h2>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="propertyValue">Property Value ($)</label>
          <input
            type="number"
            id="propertyValue"
            name="propertyValue"
            value={formData.propertyValue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="downPayment">Down Payment ($)</label>
          <input
            type="number"
            id="downPayment"
            name="downPayment"
            value={formData.downPayment}
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
            step="0.01"
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
            type="number"
            id="monthlyRent"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyTax">Annual Property Tax ($)</label>
          <input
            type="number"
            id="propertyTax"
            name="propertyTax"
            value={formData.propertyTax}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="insurance">Annual Insurance ($)</label>
          <input
            type="number"
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="maintenance">Monthly Maintenance ($)</label>
          <input
            type="number"
            id="maintenance"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>

      {results && (
        <div className="results">
          <h3>Investment Analysis</h3>
          <div className="result-item">
            <span>Monthly Mortgage Payment:</span>
            <span>${results.monthlyMortgage.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span>Total Monthly Expenses:</span>
            <span>${results.monthlyExpenses.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span>Monthly Cash Flow:</span>
            <span>${results.monthlyCashFlow.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span>Annual ROI:</span>
            <span>{results.annualROI.toFixed(2)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstateCalculator; 