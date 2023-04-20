import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbfantasyPointsComponent } from './bkbfantasy-points.component';

describe('BkbfantasyPointsComponent', () => {
  let component: BkbfantasyPointsComponent;
  let fixture: ComponentFixture<BkbfantasyPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbfantasyPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbfantasyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
