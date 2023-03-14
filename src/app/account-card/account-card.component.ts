import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {

  constructor(private clipboard:Clipboard) {}

  currency = "SAR";
  accountNumber = "07 1020 4580 0000 15020156 8310";
  accountIban = "SA07 1020 4580 0000 15020156 8310";
  ledgerBalance = "15,200,500";
  blockades = "-1,000,000";
  availableFunds = "14,200,500";

  copy(copyString: string) {
    this.clipboard.copy(copyString);
  }
  
  downloadAccountDetails() {
    const doc = new jsPDF();

    doc.text('Account Details', 20, 20);
    doc.text(`Ledger Balance: ${this.ledgerBalance}`, 20, 30);
    doc.text(`Blockades: ${this.blockades}`, 20, 30);
    doc.text(`Available Funds: ${this.availableFunds}`, 20, 30);
    doc.text(`Account Number: ${this.accountNumber}`, 20, 30);
    doc.text(`Account IBAN: ${this.accountIban}`, 20, 30);
    doc.addPage();

    doc.save('AccountDetails.pdf');
  }
}
