import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FtcompetitionsComponent} from './ftcompetitions.component';

describe('FtcompetitionsComponent', () => {
  let component: FtcompetitionsComponent;
  let fixture: ComponentFixture<FtcompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FtcompetitionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
