import type {
  HomeownerProfile,
  MortgageInsights,
  RefinanceScenario,
} from "./types";

export function monthlyMortgagePayment(
  principal: number,
  annualRate: number,
  years: number,
) {
  if (principal <= 0 || years <= 0) return 0;
  const payments = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / payments;
  const factor = Math.pow(1 + monthlyRate, payments);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

export function remainingBalance(
  principal: number,
  annualRate: number,
  originalYears: number,
  paymentsMade: number,
) {
  const payment = monthlyMortgagePayment(principal, annualRate, originalYears);
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return Math.max(0, principal - payment * paymentsMade);
  return Math.max(
    0,
    principal * Math.pow(1 + monthlyRate, paymentsMade) -
      payment * ((Math.pow(1 + monthlyRate, paymentsMade) - 1) / monthlyRate),
  );
}

export function calculateInsights(
  profile: HomeownerProfile,
  refinance: RefinanceScenario,
): MortgageInsights {
  const monthlyPrincipalAndInterest = monthlyMortgagePayment(
    profile.loanBalance,
    profile.interestRate,
    profile.remainingYears,
  );
  const monthlyRefinancePayment = monthlyMortgagePayment(
    profile.loanBalance,
    refinance.newInterestRate,
    refinance.newTermYears,
  );
  const equity = Math.max(0, profile.homeValue - profile.loanBalance);
  const loanToValue = profile.homeValue > 0
    ? (profile.loanBalance / profile.homeValue) * 100
    : 0;
  const equityPercent = profile.homeValue > 0 ? (equity / profile.homeValue) * 100 : 0;
  const monthlySavings = monthlyPrincipalAndInterest - monthlyRefinancePayment;
  const breakEvenMonths = monthlySavings > 0
    ? Math.ceil(refinance.closingCosts / monthlySavings)
    : null;
  const pmiEligible = loanToValue <= 80;
  let estimatedPmiRemovalMonths: number | null = pmiEligible ? 0 : null;

  if (!pmiEligible && profile.homeValue > 0) {
    const targetBalance = profile.homeValue * 0.8;
    for (let month = 1; month <= profile.remainingYears * 12; month += 1) {
      const balance = remainingBalance(
        profile.loanBalance,
        profile.interestRate,
        profile.remainingYears,
        month,
      );
      if (balance <= targetBalance) {
        estimatedPmiRemovalMonths = month;
        break;
      }
    }
  }

  return {
    monthlyPrincipalAndInterest,
    totalMonthlyPayment:
      monthlyPrincipalAndInterest +
      profile.monthlyPmi +
      profile.annualPropertyTax / 12 +
      profile.annualInsurance / 12,
    equity,
    equityPercent,
    loanToValue,
    monthlyRefinancePayment,
    monthlySavings,
    breakEvenMonths,
    pmiEligible,
    estimatedPmiRemovalMonths,
  };
}
