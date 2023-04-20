import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FtfantasyPointsComponent} from './ftfantasy-points.component';

describe('FtfantasyPointsComponent', () => {
  let component: FtfantasyPointsComponent;
  let fixture: ComponentFixture<FtfantasyPointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FtfantasyPointsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtfantasyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
