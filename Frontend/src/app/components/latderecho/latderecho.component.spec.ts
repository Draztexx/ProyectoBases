import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatderechoComponent } from './latderecho.component';

describe('LatderechoComponent', () => {
  let component: LatderechoComponent;
  let fixture: ComponentFixture<LatderechoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatderechoComponent]
    });
    fixture = TestBed.createComponent(LatderechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
