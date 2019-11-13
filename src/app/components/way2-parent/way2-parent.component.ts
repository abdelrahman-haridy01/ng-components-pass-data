import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way2-parent',
  templateUrl: './way2-parent.component.html',
  styleUrls: ['./way2-parent.component.scss']
})
export class Way2ParentComponent implements OnInit {
  way2Msg: string;
  constructor() { }

  ngOnInit() {
  }

  showWay2Msg(msg: any) {
    this.way2Msg = msg;
  }

}
