import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtleaderboardComponent } from './ftleaderboard.component';

describe('FtleaderboardComponent', () => {
  let component: FtleaderboardComponent;
  let fixture: ComponentFixture<FtleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
