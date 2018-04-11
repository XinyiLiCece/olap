import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery13Component } from './present-query13.component';

describe('PresentQuery13Component', () => {
  let component: PresentQuery13Component;
  let fixture: ComponentFixture<PresentQuery13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
