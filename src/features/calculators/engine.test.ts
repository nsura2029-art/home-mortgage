import { describe, expect, it } from "vitest";
import { calculateInsights, monthlyMortgagePayment } from "./engine";

describe("mortgage calculation engine", () => {
  it("calculates a standard fixed-rate payment", () => {
    expect(monthlyMortgagePayment(300_000, 6.5, 30)).toBeCloseTo(1896.2, 1);
  });

  it("calculates homeowner equity and refinance break-even", () => {
    const result = calculateInsights(
      {
        homeValue: 500_000,
        loanBalance: 350_000,
        interestRate: 7.1,
        remainingYears: 27,
        monthlyPmi: 145,
        annualPropertyTax: 7_200,
        annualInsurance: 2_400,
      },
      { newInterestRate: 6.1, newTermYears: 30, closingCosts: 6_500 },
    );

    expect(result.equity).toBe(150_000);
    expect(result.loanToValue).toBe(70);
    expect(result.pmiEligible).toBe(true);
    expect(result.breakEvenMonths).toBeGreaterThan(0);
  });
});
