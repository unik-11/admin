import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbleaderboardDetailsComponent } from './bkbleaderboard-details.component';

describe('BkbleaderboardDetailsComponent', () => {
  let component: BkbleaderboardDetailsComponent;
  let fixture: ComponentFixture<BkbleaderboardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbleaderboardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbleaderboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
