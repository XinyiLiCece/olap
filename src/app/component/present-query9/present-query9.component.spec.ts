import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery9Component } from './present-query9.component';

describe('PresentQuery9Component', () => {
  let component: PresentQuery9Component;
  let fixture: ComponentFixture<PresentQuery9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
