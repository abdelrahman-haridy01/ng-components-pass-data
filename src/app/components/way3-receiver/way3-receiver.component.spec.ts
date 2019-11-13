import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Way3ReceiverComponent } from './way3-receiver.component';

describe('Way3ReceiverComponent', () => {
  let component: Way3ReceiverComponent;
  let fixture: ComponentFixture<Way3ReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Way3ReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Way3ReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
