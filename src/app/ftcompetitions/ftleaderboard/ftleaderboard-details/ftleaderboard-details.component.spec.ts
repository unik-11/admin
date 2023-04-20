import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtleaderboardDetailsComponent } from './ftleaderboard-details.component';

describe('FtleaderboardDetailsComponent', () => {
  let component: FtleaderboardDetailsComponent;
  let fixture: ComponentFixture<FtleaderboardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtleaderboardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtleaderboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
