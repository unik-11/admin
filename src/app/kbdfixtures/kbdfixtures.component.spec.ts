import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdfixturesComponent } from './kbdfixtures.component';

describe('KbdfixturesComponent', () => {
  let component: KbdfixturesComponent;
  let fixture: ComponentFixture<KbdfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdfixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
