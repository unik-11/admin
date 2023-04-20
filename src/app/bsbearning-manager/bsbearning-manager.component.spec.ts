import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbearningManagerComponent } from './bsbearning-manager.component';

describe('BsbearningManagerComponent', () => {
  let component: BsbearningManagerComponent;
  let fixture: ComponentFixture<BsbearningManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbearningManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbearningManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
