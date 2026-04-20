import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../service/calculator.service';
import { DataForCalculate } from '../../model/calculator.model';

@Component({
  selector: 'app-user-input-form',
  imports: [FormsModule],
  templateUrl: './user-input-form.component.html',
  styleUrl: './user-input-form.component.scss',
})
export class InputFormUserComponent {
  private calculatorService = inject(CalculatorService);
  public initialInvestment = signal<string>('');
  public annualInvestment = signal<string>('');
  public expectedReturn = signal<string>('5');
  public duration = signal<string>('10');

  onSubmit() {
    const data: DataForCalculate = {
      initialInvestment: Number(this.initialInvestment()),
      annualInvestment: Number(this.annualInvestment()),
      expectedReturn: Number(this.expectedReturn()),
      duration: Number(this.duration()),
    };
    this.calculatorService.investmentResult(data);
    this.initialInvestment.set('');
    this.annualInvestment.set('');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
