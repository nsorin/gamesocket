import { Injectable } from '@angular/core';
import Message from '../models/message'
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages: Array<Message> = []
  
  constructor(private _socket: Socket) { 
    this.listen()
  }

  get messages(): Array<Message> {
    return this._messages
  }

  /**
   * Add a message at the end of the list
   * @param message 
   */
  public sendMessage(message: Message): void {
    this._socket.emit('message', message)
  }

  /**
   * Clear the message list
   */
  public clearMessages(): void {
    this._messages.splice(0, this._messages.length)
  }

  /**
   * Listen to the Socket IO connection for new messages
   */
  private listen(): void {
    this._socket.on('message', (data: any) => {
      let message = new Message()
      message.author = data.author || "(Anonymous)"
      message.content = data.content
      this._messages.push(message)
    })
  }
}
