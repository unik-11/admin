import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkyfixturesComponent } from './hkyfixtures.component';

describe('HkyfixturesComponent', () => {
  let component: HkyfixturesComponent;
  let fixture: ComponentFixture<HkyfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkyfixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkyfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
