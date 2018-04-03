import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery8Component } from './present-query8.component';

describe('PresentQuery8Component', () => {
  let component: PresentQuery8Component;
  let fixture: ComponentFixture<PresentQuery8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
