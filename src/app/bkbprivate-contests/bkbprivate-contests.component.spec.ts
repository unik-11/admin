import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbprivateContestsComponent } from './bkbprivate-contests.component';

describe('BkbprivateContestsComponent', () => {
  let component: BkbprivateContestsComponent;
  let fixture: ComponentFixture<BkbprivateContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbprivateContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkbprivateContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
