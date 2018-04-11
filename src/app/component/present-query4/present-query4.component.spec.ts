import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuery4Component } from './present-query4.component';

describe('PresentQuery4Component', () => {
  let component: PresentQuery4Component;
  let fixture: ComponentFixture<PresentQuery4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuery4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuery4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
