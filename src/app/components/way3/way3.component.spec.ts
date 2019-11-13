import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Way3Component } from './way3.component';

describe('Way3Component', () => {
  let component: Way3Component;
  let fixture: ComponentFixture<Way3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Way3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Way3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
