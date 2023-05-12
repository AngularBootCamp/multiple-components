import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll-search',
  template: `
    <article>
      <header>Payroll Functionality</header>
      <p>Search for Employee Payroll Records</p>
      <app-search-box></app-search-box>
    </article>
  `
})
export class PayrollSearchComponent {}
