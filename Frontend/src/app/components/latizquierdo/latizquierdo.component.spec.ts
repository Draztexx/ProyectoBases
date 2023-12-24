import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatizquierdoComponent } from './latizquierdo.component';

describe('LatizquierdoComponent', () => {
  let component: LatizquierdoComponent;
  let fixture: ComponentFixture<LatizquierdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatizquierdoComponent]
    });
    fixture = TestBed.createComponent(LatizquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
