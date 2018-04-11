import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery7Component } from './present-query7.component';

describe('PresentQuery7Component', () => {
  let component: PresentQuery7Component;
  let fixture: ComponentFixture<PresentQuery7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
