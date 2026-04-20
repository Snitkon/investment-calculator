export interface DataForCalculate {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface DataForTable {
  annualInvestment: number;
  interest: number;
  totalAmountInvested: number;
  totalInterest: number;
  valueEndOfYear: number;
  year: number;
}
