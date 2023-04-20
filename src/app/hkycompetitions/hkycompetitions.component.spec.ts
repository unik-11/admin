import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkycompetitionsComponent } from './hkycompetitions.component';

describe('HkycompetitionsComponent', () => {
  let component: HkycompetitionsComponent;
  let fixture: ComponentFixture<HkycompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkycompetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkycompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
