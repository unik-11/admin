import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbfantasyPointsComponent } from './bsbfantasy-points.component';

describe('BsbfantasyPointsComponent', () => {
  let component: BsbfantasyPointsComponent;
  let fixture: ComponentFixture<BsbfantasyPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbfantasyPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbfantasyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
