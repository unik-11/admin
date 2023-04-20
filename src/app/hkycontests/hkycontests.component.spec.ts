import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkycontestsComponent } from './hkycontests.component';

describe('HkycontestsComponent', () => {
  let component: HkycontestsComponent;
  let fixture: ComponentFixture<HkycontestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkycontestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkycontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
