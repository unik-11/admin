import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtprivateContestsComponent } from './ftprivate-contests.component';

describe('FtprivateContestsComponent', () => {
  let component: FtprivateContestsComponent;
  let fixture: ComponentFixture<FtprivateContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtprivateContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtprivateContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
