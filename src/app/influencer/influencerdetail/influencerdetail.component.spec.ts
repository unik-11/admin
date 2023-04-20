import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerdetailComponent } from './influencerdetail.component';

describe('InfluencerdetailComponent', () => {
  let component: InfluencerdetailComponent;
  let fixture: ComponentFixture<InfluencerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
