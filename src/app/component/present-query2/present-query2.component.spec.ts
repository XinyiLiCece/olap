import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery2Component } from './present-query2.component';

describe('PresentQuery2Component', () => {
  let component: PresentQuery2Component;
  let fixture: ComponentFixture<PresentQuery2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
