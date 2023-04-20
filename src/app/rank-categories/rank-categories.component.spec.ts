import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RankCategoriesComponent} from './rank-categories.component';


describe('RankCategoriesComponent', () => {
  let component: RankCategoriesComponent;
  let fixture: ComponentFixture<RankCategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RankCategoriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
