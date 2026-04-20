import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CalculatorService } from '../../service/calculator.service';

@Component({
  selector: 'app-result-table',
  imports: [CurrencyPipe],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
})
export class ResultTableComponent {
  private calculatorService = inject(CalculatorService);

  public data = computed(() => this.calculatorService.data());
}
