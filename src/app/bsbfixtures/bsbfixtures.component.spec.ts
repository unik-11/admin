import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbfixturesComponent } from './bsbfixtures.component';

describe('BsbfixturesComponent', () => {
  let component: BsbfixturesComponent;
  let fixture: ComponentFixture<BsbfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsbfixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
