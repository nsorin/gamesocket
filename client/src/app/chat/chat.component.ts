import { Component, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from './services/message.service';
import Message from './models/message';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked {

  _open: Boolean

  @ViewChild('messageInput', {static: false}) messageInputRef: ElementRef
  @ViewChild('messageContainer', {static: false}) messageContainerRef: ElementRef

  @Input() set open(open) {
    this._open = open
    if (open) {
      this.messageInputRef.nativeElement.focus()
    } else {
      try {
        this.messageInputRef.nativeElement.blur()
        this.chatForm.reset()
      } catch (err) {}
    }
  }

  get open(): Boolean {
    return this._open
  }

  get messages(): Array<Message> {
    return this.messageService.messages
  }
  
  chatForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  constructor(private messageService: MessageService) {}

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  sendMessage() {
    let message = new Message()
    message.author = "Me"
    message.content = this.chatForm.value.message  
    this.messageService.sendMessage(message)
    this.chatForm.reset()
  }

  scrollToBottom(): void {
    try {
        this.messageContainerRef.nativeElement.scrollTop
          = this.messageContainerRef.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
