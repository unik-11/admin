import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcontestsComponent } from './bsbcontests.component';

describe('BsbcontestsComponent', () => {
  let component: BsbcontestsComponent;
  let fixture: ComponentFixture<BsbcontestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbcontestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbcontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
