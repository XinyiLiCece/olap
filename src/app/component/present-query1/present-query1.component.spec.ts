import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery1Component } from './present-query1.component';

describe('PresentQuery1Component', () => {
  let component: PresentQuery1Component;
  let fixture: ComponentFixture<PresentQuery1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
