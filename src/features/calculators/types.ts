export type HomeownerProfile = {
  homeValue: number;
  loanBalance: number;
  interestRate: number;
  remainingYears: number;
  monthlyPmi: number;
  annualPropertyTax: number;
  annualInsurance: number;
};

export type RefinanceScenario = {
  newInterestRate: number;
  newTermYears: number;
  closingCosts: number;
};

export type MortgageInsights = {
  monthlyPrincipalAndInterest: number;
  totalMonthlyPayment: number;
  equity: number;
  equityPercent: number;
  loanToValue: number;
  monthlyRefinancePayment: number;
  monthlySavings: number;
  breakEvenMonths: number | null;
  pmiEligible: boolean;
  estimatedPmiRemovalMonths: number | null;
};
