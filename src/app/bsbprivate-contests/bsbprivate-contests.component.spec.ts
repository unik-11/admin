import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbprivateContestsComponent } from './bsbprivate-contests.component';

describe('BsbprivateContestsComponent', () => {
  let component: BsbprivateContestsComponent;
  let fixture: ComponentFixture<BsbprivateContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbprivateContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbprivateContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
