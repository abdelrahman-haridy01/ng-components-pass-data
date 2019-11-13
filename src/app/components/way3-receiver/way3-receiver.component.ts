import { Component, OnInit } from '@angular/core';
// Services 
import { Way3Service } from "./../../shared/services/way3.service";
@Component({
  selector: 'app-way3-receiver',
  templateUrl: './way3-receiver.component.html',
  styleUrls: ['./way3-receiver.component.scss']
})
export class Way3ReceiverComponent implements OnInit {
  way3Msgc;
  constructor(private way3Service: Way3Service) {
  }

  ngOnInit() {
    this.way3Service.sendMsg.subscribe(msg => {
      this.way3Msgc = msg;
    });
    console.log(this.way3Msgc);

  }

}
