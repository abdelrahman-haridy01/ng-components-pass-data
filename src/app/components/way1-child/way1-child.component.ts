import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-way1-child',
  templateUrl: './way1-child.component.html',
  styleUrls: ['./way1-child.component.scss']
})
export class Way1ChildComponent implements OnInit {
  @Input() way1ChildMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
