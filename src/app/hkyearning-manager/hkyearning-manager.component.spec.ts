import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkyearningManagerComponent } from './hkyearning-manager.component';

describe('HkyearningManagerComponent', () => {
  let component: HkyearningManagerComponent;
  let fixture: ComponentFixture<HkyearningManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkyearningManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkyearningManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
