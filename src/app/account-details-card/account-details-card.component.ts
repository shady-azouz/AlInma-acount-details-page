import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-account-details-card',
  templateUrl: './account-details-card.component.html',
  styleUrls: ['./account-details-card.component.scss'],
})
export class AccountDetailsCardComponent {
  @Input() width: string = '300';
  @Input() accountBalance: string = '12500500';
  @Input() accountNumber: string = '07102045800000150201568310';
  @Input() currency: string = 'SAR';
  @Input() currencyChar: string = 'SA';
  @Input() ledgerBalance: string = '15200500.32';
  @Input() blockades: string = '-1000000.32';
  displayAccountNumber = '';
  wholeNumber: string = '';
  decimal: string = '';

  constructor(private clipboard: Clipboard) {
    const tempList = parseFloat(this.accountBalance)
      .toFixed(2)
      .toString()
      .split('.');
    this.wholeNumber = tempList[0];
    this.decimal = tempList[1];
    this.wholeNumber = this.numberWithCommas(this.wholeNumber);

    this.displayAccountNumber =
      this.accountNumber.substring(0, 2) +' ' +
      this.accountNumber.substring(2, 6) +' ' +
      this.accountNumber.substring(6, 10) +' ' +
      this.accountNumber.substring(10, 14) +' ' +
      this.accountNumber.substring(14, 22) +' ' +
      this.accountNumber.substring(22, 26);

      this.ledgerBalance = this.formatFloatWithComas(this.ledgerBalance);
      this.blockades = this.formatFloatWithComas(this.blockades);
  }

  copy(copyString: string) {
    this.clipboard.copy(copyString);
  }

  private numberWithCommas(x: string) {
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }

  private formatFloatWithComas(x: string) {
    const tempList = parseFloat(x).toFixed(2).toString().split('.');
    return this.numberWithCommas(tempList[0])+'.'+tempList[1];
  }
}
