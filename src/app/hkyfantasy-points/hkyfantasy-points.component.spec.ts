import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkyfantasyPointsComponent } from './hkyfantasy-points.component';

describe('HkyfantasyPointsComponent', () => {
  let component: HkyfantasyPointsComponent;
  let fixture: ComponentFixture<HkyfantasyPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkyfantasyPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkyfantasyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
