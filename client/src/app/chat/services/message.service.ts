import { Injectable } from '@angular/core';
import Message from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages: Array<Message> = []
  
  constructor() { }

  get messages(): Array<Message> {
    return this._messages
  }

  /**
   * Add a message at the end of the list
   * @param message 
   */
  public addMessage(message: Message): void {
    this._messages.push(message)
  }

  /**
   * Clear the message list
   */
  public clearMessages(): void {
    this._messages.splice(0, this._messages.length)
  }
}
