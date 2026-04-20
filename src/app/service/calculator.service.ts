import { Injectable, signal } from '@angular/core';
import { DataForCalculate, DataForTable } from '../model/calculator.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public data = signal<Array<DataForTable> | undefined>(undefined);
  public investmentResult({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: DataForCalculate): void {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.data.set(annualData);
  }
}
