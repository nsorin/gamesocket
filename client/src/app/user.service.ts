import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userName: string
  
  get userName(): string {
    return this._userName
  }

  set userName(userName: string) {
    this._userName = userName
    localStorage.setItem('userName', userName)
  }

  constructor() {
    this._userName = localStorage.getItem('userName')
  }
}
