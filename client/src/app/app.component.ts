import { Component, HostListener, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';

const ESCAPE_KEYCODE = 27

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  showChat: Boolean = false

  get isLoggedIn(): boolean {
    return Boolean(this._userService.userName)
  }

  @HostListener('document:keypress', ['$event'])
  onKeyPressHandler(event: KeyboardEvent) {
    if (event.key === 't' && !this.showChat) {
      this.showChat = true
    }
  }
  
  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) { 
    if (event.keyCode === ESCAPE_KEYCODE && this.showChat) {
      this.showChat = false
    }
  }

  toggleChat(): void {
    this.showChat = !this.showChat
  }

  constructor(private _socket: Socket, private _userService: UserService) {}

  ngOnInit(): void {
    this._socket.on('connect', () => {
      console.log("connected")
    })
  }
}
