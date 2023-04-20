import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdcontestsComponent } from './kbdcontests.component';

describe('KbdcontestsComponent', () => {
  let component: KbdcontestsComponent;
  let fixture: ComponentFixture<KbdcontestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdcontestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdcontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
