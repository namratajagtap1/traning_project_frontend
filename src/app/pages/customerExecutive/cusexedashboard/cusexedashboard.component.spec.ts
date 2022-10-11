import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusexedashboardComponent } from './cusexedashboard.component';

describe('CusexedashboardComponent', () => {
  let component: CusexedashboardComponent;
  let fixture: ComponentFixture<CusexedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusexedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusexedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
