import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkyleaderboardComponent } from './hkyleaderboard.component';

describe('HkyleaderboardComponent', () => {
  let component: HkyleaderboardComponent;
  let fixture: ComponentFixture<HkyleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkyleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkyleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
