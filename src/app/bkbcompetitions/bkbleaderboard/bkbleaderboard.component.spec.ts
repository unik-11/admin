import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbleaderboardComponent } from './bkbleaderboard.component';

describe('BkbleaderboardComponent', () => {
  let component: BkbleaderboardComponent;
  let fixture: ComponentFixture<BkbleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
