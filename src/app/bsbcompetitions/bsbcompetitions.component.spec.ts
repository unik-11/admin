import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcompetitionsComponent } from './bsbcompetitions.component';

describe('BsbcompetitionsComponent', () => {
  let component: BsbcompetitionsComponent;
  let fixture: ComponentFixture<BsbcompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbcompetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
