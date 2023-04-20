import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdcompetitionsComponent } from './kbdcompetitions.component';

describe('KbdcompetitionsComponent', () => {
  let component: KbdcompetitionsComponent;
  let fixture: ComponentFixture<KbdcompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdcompetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
