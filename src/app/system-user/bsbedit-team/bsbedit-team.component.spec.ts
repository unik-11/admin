import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbeditTeamComponent } from './bsbedit-team.component';

describe('BsbeditTeamComponent', () => {
  let component: BsbeditTeamComponent;
  let fixture: ComponentFixture<BsbeditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbeditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbeditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
