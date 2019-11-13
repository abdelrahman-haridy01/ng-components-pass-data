import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way1-parent',
  templateUrl: './way1-parent.component.html',
  styleUrls: ['./way1-parent.component.scss']
})
export class Way1ParentComponent implements OnInit {
  way1Msg: string;
  constructor() { }

  ngOnInit() {
  }

  way1SendMsg() {
    this.way1Msg = "Hi! How are you?";
  }

}
