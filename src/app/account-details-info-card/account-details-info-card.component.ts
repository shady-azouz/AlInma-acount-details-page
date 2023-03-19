import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-details-info-card',
  templateUrl: './account-details-info-card.component.html',
  styleUrls: ['./account-details-info-card.component.scss']
})
export class AccountDetailsInfoCardComponent {
  @Input() logoName = 'accounts.png';
  logoDescription = 'logo details'
  title = 'accounts';
  value = '15,000,000.35'
  currency = 'SAR'
}
