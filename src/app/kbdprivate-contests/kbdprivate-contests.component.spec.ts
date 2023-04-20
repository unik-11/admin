import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdprivateContestsComponent } from './kbdprivate-contests.component';

describe('KbdprivateContestsComponent', () => {
  let component: KbdprivateContestsComponent;
  let fixture: ComponentFixture<KbdprivateContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdprivateContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdprivateContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
