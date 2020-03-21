import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userName: string
  
  get userName(): string {
    return this._userName
  }

  set userName(userName: string) {
    if (userName) {
      this._userName = userName
      localStorage.setItem('userName', userName)
      this._socket.emit('userName', {name: userName})
    }
  }

  constructor(private _socket: Socket) {
    this.userName = localStorage.getItem('userName')
  }
}
