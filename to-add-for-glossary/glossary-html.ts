import { PropertiesKey } from './properties';

export interface IGlossary {
    key: PropertiesKey;
    title: string;
    text: string;
}

const glossaryHtml: IGlossary[] = [
    {
        key: PropertiesKey.CashOnCashReturnPercent,
        title: 'Cash on Cash Return',
        text: `
<p>This is one of the most important calculations for the rate of return in real estate.
<p>Simply put, this is how much money you will make from the money you've invested in your rental property in a year.
<p>For example, if your Initial Investment is $50,000 and the Cash-on-Cash Return is 10%, you'll receive $5,000 in your first year. That means you'll get $417 every month in your bank account after all expenses have been paid.
`,
    },
    {
        key: PropertiesKey.CapRate,
        title: 'Cap Rate',
        text: `
<p>Capitalization Rate (Cap Rate) is a rate of return of a rental property based on comparing the yearly Net Operating Income (NOI) to the purchase price or market value.
<p>The cap rate excludes the loan payments from the calculations so we can use it to evaluate the property independently of financing terms.
`,
    },
    {
        key: PropertiesKey.CertifiedDeals,
        title: 'Certified Deals',
        text: `
<p>In addition to our AI algorithms, our investment analytics team manually verifies the "best of the best" investment deals.
<p>These deals are usually time-sensitive - everyone wants those properties.
`,
    },
    {
        key: PropertiesKey.ClosingCost,
        title: 'Closing Cost',
        text: `
<p>This is the sum of all costs you'll pay when buying a property, in addition to the down payment. These include real estate lawyer fees, your lender fees, real estate commissions, insurance, and others.
<p>The closing cost is usually 3-6% of the purchase price. Your lender will give you the best estimate for this cost.
`,
    },
    {
        key: PropertiesKey.DownPayment,
        title: 'Down Payment',
        text: `
<p>If you are taking a loan to purchase your property, your lender will always require you to pay this. The less you put down, the more you'll pay in interest over the lifetime of your loan. A small down payment, usually under 20%, will also result in one additional expense - the Private Mortgage Insurance (PMI).
<p>Adjust the down payment in the property details page to estimate the property returns.
`,
    },
    {
        key: PropertiesKey.InitialInvestment,
        title: 'Initial Investment',
        text: `
<p>The total of all costs to purchase your property. It includes the down payment, the closing costs, and any optional rehab costs.
<p>Consider this as all the money you need to buy your investment property.
`,
    },
    {
        key: PropertiesKey.InterestRate,
        title: 'Interest Rate',
        text: `
<p>This is an expense included in your monthly loan payment. It's calculated as a percentage of the mortgage loan. The mortgage interest compounds over time.
<p>You can usually deduct your mortgage interest on your tax return.
`,
    },
    {
        key: PropertiesKey.InternalRateOfReturnIn5YearsPercent,
        title: 'Internal Rate of Return',
        text: `
<p>IRR, sometimes called annualized ROI, is the average annualized rate of return on all the cash you've invested in the property.
<p>ROI tells an investor about the total growth, start to finish, of the investment. It is not an annual rate of return.
<p>IRR tells the investor what the annual growth rate is. The two numbers would normally be the same over the course of one year, but they won't be the same for longer periods of time.
`,
    },
    {
        key: PropertiesKey.ListingPrice,
        title: 'Listing Price',
        text: `
<p>The Listing Price is the price that the seller wants to sell their house for. Ideally, you'll want to negotiate the listing price to be lower, when the market conditions allow.
<p>Your Offer Price is the actual price that you and the seller will eventually agree on.
`,
    },
    {
        key: PropertiesKey.LoanAmount,
        title: 'Loan Amount',
        text: `
<p>The total amount you’ll own to your lender.
`,
    },
    {
        key: PropertiesKey.LoanTerms,
        title: 'Loan Terms',
        text: `
<p>The Loan Term is the number of years of the loan.
`,
    },
    {
        key: PropertiesKey.ManagementExpense,
        title: 'Management Expense',
        text: `
<p>The Management Expense is the money you'll give to your property manager as a percentage of the monthly rent.
`,
    },
    {
        key: PropertiesKey.MonthlyCashFlowAmount,
        title: 'Monthly Cash Flow',
        text: `
<p>The Monthly Cash Flow is the money you'll get every month after paying all the expenses.
`,
    },
    {
        key: PropertiesKey.MonthlyExpenses,
        title: 'Monthly Expenses',
        text: `
You spend money on your property every month. This includes the mortgage payment, property management fees, vacancy and maintenance costs, property taxes, HOA fees, and insurance premiums.
`,
    },
    {
        key: PropertiesKey.MonthlyHOA,
        title: 'Monthly HOA',
        text: `
<p>HOA (Home Owners Association) Fees are an expense in case your property has a Home Owners Association.
`,
    },
    {
        key: PropertiesKey.MonthlyInsurance,
        title: 'Monthly Insurance',
        text: `
<p>Homeowner's Insurance Premiums are the monthly payments for homeowner's insurance.
`,
    },
    {
        key: PropertiesKey.MonthlyLoanPayment,
        title: 'Monthly Loan Payment',
        text: `
<p>Amount you’ll pay to your lender every month.
`,
    },
    {
        key: PropertiesKey.MonthlyRent,
        title: 'Monthly Rent',
        text: `
<p>Amount your tenants will pay to you every month.
`,
    },
    {
        key: PropertiesKey.MonthlyTaxes,
        title: 'Monthly Taxes',
        text: `
<p>Property taxes you pay every month to a state, county and sometimes city.
`,
    },
    {
        key: PropertiesKey.NeighborhoodRating,
        title: 'Neighborhood Rating',
        text: `
<p>We derive the neighborhood quality from the assigned school ratings.
`,
    },
    {
        key: PropertiesKey.OfferPrice,
        title: 'Offer Price',
        text: `
<p>The Offer Price is the purchase price that you and the seller agree on. You will want to negotiate the offer price down. Ideally, it should be less than the Listing Price, but it depends on the specific property and the market conditions.
`,
    },
    {
        key: PropertiesKey.PMI,
        title: 'PMI',
        text: `
<p>Private Mortgage Insurance (PMI) is an extra insurance charge that your lender sometimes requires when your down payment is too low, typically less than 20%.
`,
    },
    {
        key: PropertiesKey.RehabCosts,
        title: 'Rehab Costs',
        text: `
<p>The money you expect to spend on repairs before your property is rented out.
`,
    },
    {
        key: PropertiesKey.RentRatio,
        title: 'Rent Ratio',
        text: `
<p>The Rent Ratio is a rate of return that compares the monthly gross rent to the purchase price, including any potential rehab costs. Experienced investors often use the "1% rule" or greater for the rent ratio.
`,
    },
    {
        key: PropertiesKey.VacancyAndMaintenance,
        title: 'Vacancy and Maintenance',
        text: `
<p>The amount of your monthly rent you should set aside for repairs.
`,
    },
    {
        key: PropertiesKey.FiveYValueIncrease,
        title: '5y Value Increase',
        text: `
<p>This is the potential increase in property value over 5 years.
`,
    },
];

export default glossaryHtml;
