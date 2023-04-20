import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbearningManagerComponent } from './bkbearning-manager.component';

describe('BkbearningManagerComponent', () => {
  let component: BkbearningManagerComponent;
  let fixture: ComponentFixture<BkbearningManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbearningManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbearningManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
