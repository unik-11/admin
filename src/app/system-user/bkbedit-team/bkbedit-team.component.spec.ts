import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbeditTeamComponent } from './bkbedit-team.component';

describe('BkbeditTeamComponent', () => {
  let component: BkbeditTeamComponent;
  let fixture: ComponentFixture<BkbeditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbeditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbeditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
