import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  @Output() cancelInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  loginUserHandler() {
      // send information to server

      // if user is found send to dashboard

      // if not keep user in login page
  }

  cancelHandler = () => {
    this.cancelInput.emit();
  }
}
