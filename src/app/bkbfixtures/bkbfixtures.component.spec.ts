import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbfixturesComponent } from './bkbfixtures.component';

describe('BkbfixturesComponent', () => {
  let component: BkbfixturesComponent;
  let fixture: ComponentFixture<BkbfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbfixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
