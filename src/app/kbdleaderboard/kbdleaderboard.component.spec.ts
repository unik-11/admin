import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdleaderboardComponent } from './kbdleaderboard.component';

describe('KbdleaderboardComponent', () => {
  let component: KbdleaderboardComponent;
  let fixture: ComponentFixture<KbdleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
