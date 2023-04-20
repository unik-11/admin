import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteditTeamComponent } from './ftedit-team.component';

describe('FteditTeamComponent', () => {
  let component: FteditTeamComponent;
  let fixture: ComponentFixture<FteditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
