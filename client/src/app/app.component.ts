import { Component, HostListener } from '@angular/core';

const ESCAPE_KEYCODE = 27

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showChat: Boolean = false

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
}
