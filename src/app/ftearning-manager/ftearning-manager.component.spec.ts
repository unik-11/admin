import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtearningManagerComponent } from './ftearning-manager.component';

describe('FtearningManagerComponent', () => {
  let component: FtearningManagerComponent;
  let fixture: ComponentFixture<FtearningManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtearningManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtearningManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
