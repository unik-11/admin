import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubadminPermissionComponent } from './subadmin-permission.component';

describe('SubadminPermissionComponent', () => {
  let component: SubadminPermissionComponent;
  let fixture: ComponentFixture<SubadminPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubadminPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubadminPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
