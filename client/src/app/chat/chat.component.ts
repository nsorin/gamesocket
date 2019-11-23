import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() open: Boolean
  
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  sendMessage() {
      console.log(this.chatForm.value.message)
      this.chatForm.reset()
  }

}
