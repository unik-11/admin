import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkyprivateContestsComponent } from './hkyprivate-contests.component';

describe('HkyprivateContestsComponent', () => {
  let component: HkyprivateContestsComponent;
  let fixture: ComponentFixture<HkyprivateContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkyprivateContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkyprivateContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
