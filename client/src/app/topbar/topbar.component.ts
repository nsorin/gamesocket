import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @Output() chatToggle = new EventEmitter();

  toggleChat(): void {
    this.chatToggle.emit()
  }
  
}
