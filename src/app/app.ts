import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InputFormUserComponent } from './components/user-input-form/user-input-form.component';
import { ResultTableComponent } from './components/result-table/result-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InputFormUserComponent, ResultTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('calculator');
}
