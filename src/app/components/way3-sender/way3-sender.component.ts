import { Component, OnInit } from '@angular/core';

// Services 
import { Way3Service } from "./../../shared/services/way3.service";
@Component({
  selector: 'app-way3-sender',
  templateUrl: './way3-sender.component.html',
  styleUrls: ['./way3-sender.component.scss']
})
export class Way3SenderComponent implements OnInit {
  way3Msgc: any;
  constructor(private way3Service: Way3Service) { }

  ngOnInit() {
  }

  sendWay3Msg() {
    this.way3Service.updateWay3Msg(this.way3Msgc);
  }

}
