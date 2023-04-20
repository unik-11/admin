import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdfantasyPointsComponent } from './kbdfantasy-points.component';

describe('KbdfantasyPointsComponent', () => {
  let component: KbdfantasyPointsComponent;
  let fixture: ComponentFixture<KbdfantasyPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbdfantasyPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdfantasyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
