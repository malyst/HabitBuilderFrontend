import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from "../../User";

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
    const user = new User(
      this.username,
      this.password
    )
      // send information to server
      console.log("Sending user information to server:");
      console.log(user);

      // if user is found
      if(user) {
        console.log("User found!");
        // send to dashboard
      } else {
        console.error("User not found!");
        // if not keep user in login page
      }

  }

  cancelHandler = () => {
    this.cancelInput.emit();
  }
}
