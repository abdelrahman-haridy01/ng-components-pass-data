import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Way3Service {

  sendMsg: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  // Change "way3Msg" value
  updateWay3Msg(msg: any) {
    this.sendMsg.emit(msg)
  }

}
