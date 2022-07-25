import { Component, OnInit } from '@angular/core';

import { User } from "../../User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  registerUserHandler = () => {
    // const user = new User(
    //   e.target.username,
    //   e.target.password,
    //   e.target.confirmPassword
    // )

    console.log(this.username, this.password, this.confirmPassword);
  }
}
