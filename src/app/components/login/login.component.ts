import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from "../../models/User";
import { APIConnecterService } from "../../services/apiconnecter.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  @Output() cancelInput: EventEmitter<any> = new EventEmitter();

  constructor(private connector: APIConnecterService) { }

  ngOnInit(): void {
  }
  
  async loginUserHandler() {
    const user = new User(
      this.email,
      this.password
    )
      // send information to server
      const isFound = await this.connector.loginUser(user).subscribe(result => console.log(result))

      // if user is found
      if(isFound) {
        console.log(isFound);
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
