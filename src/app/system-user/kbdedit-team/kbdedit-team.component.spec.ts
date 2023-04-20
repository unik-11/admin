import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdeditTeamComponent } from './kbdedit-team.component';

describe('KbdeditTeamComponent', () => {
  let component: KbdeditTeamComponent;
  let fixture: ComponentFixture<KbdeditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdeditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdeditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
