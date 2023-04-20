import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbcontestsComponent } from './bkbcontests.component';

describe('BkbcontestsComponent', () => {
  let component: BkbcontestsComponent;
  let fixture: ComponentFixture<BkbcontestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbcontestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbcontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
