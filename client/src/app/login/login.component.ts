import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required)
  });
  
  constructor(private _userService: UserService) { }

  public onSubmit() {
    this._userService.userName = this.loginForm.value.userName
  }

}
