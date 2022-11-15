import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAngleComponent } from './calculate-angle.component';

describe('CalculateAngleComponent', () => {
  let component: CalculateAngleComponent;
  let fixture: ComponentFixture<CalculateAngleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateAngleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateAngleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
