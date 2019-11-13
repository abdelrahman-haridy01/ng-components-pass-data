import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-way2-child',
  templateUrl: './way2-child.component.html',
  styleUrls: ['./way2-child.component.scss']
})
export class Way2ChildComponent implements OnInit {
  @Output() way2Msg = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  way2SendMsg() {
    this.way2Msg.emit('SUCKS ... SUCKS ... SUCKS');
  }

}
