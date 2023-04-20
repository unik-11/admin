import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdearningManagerComponent } from './kbdearning-manager.component';

describe('KbdearningManagerComponent', () => {
  let component: KbdearningManagerComponent;
  let fixture: ComponentFixture<KbdearningManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdearningManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdearningManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
