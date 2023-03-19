import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsInfoCardComponent } from './account-details-info-card.component';

describe('AccountDetailsInfoCardComponent', () => {
  let component: AccountDetailsInfoCardComponent;
  let fixture: ComponentFixture<AccountDetailsInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailsInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
