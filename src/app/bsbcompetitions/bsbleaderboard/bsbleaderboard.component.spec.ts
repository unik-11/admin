import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbleaderboardComponent } from './bsbleaderboard.component';

describe('BsbleaderboardComponent', () => {
  let component: BsbleaderboardComponent;
  let fixture: ComponentFixture<BsbleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
