import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-details-card',
  templateUrl: './account-details-card.component.html',
  styleUrls: ['./account-details-card.component.scss']
})
export class AccountDetailsCardComponent {

  @Input() width: string = '300';

}
