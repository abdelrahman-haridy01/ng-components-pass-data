import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Way3SenderComponent } from './way3-sender.component';

describe('Way3SenderComponent', () => {
  let component: Way3SenderComponent;
  let fixture: ComponentFixture<Way3SenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Way3SenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Way3SenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
