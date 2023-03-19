import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountDetailsCardComponent } from './account-details-card/account-details-card.component';
import { AccountDetailsInfoCardComponent } from './account-details-info-card/account-details-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCardComponent,
    AccountDetailsCardComponent,
    AccountDetailsInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
