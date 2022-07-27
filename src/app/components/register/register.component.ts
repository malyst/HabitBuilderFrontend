import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from "../../User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  first_name: string = "";
  last_name: string = "";
  confirmPassword: string = "";

  @Output() cancelInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  registerUserHandler = () => {
    const user = new User(
      this.username,
      this.password,
      this.first_name,
      this.last_name
    )

    if (this.password === this.confirmPassword) {
      console.log(`Sending information to server for registeration: ${user}`);
      
      // Send information to server and switch to user dashboard
    } else {
      console.log("Please enter the correct password and confirm.")
    }
  }

  cancelHandler = () => {
    this.cancelInput.emit();
  }
}
