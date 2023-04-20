import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FtcontestsComponent} from './ftcontests.component';

describe('FtcontestsComponent', () => {
  let component: FtcontestsComponent;
  let fixture: ComponentFixture<FtcontestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FtcontestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtcontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
