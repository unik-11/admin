import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbcompetitionsComponent } from './bkbcompetitions.component';

describe('BkbcompetitionsComponent', () => {
  let component: BkbcompetitionsComponent;
  let fixture: ComponentFixture<BkbcompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbcompetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
