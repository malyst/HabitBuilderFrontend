import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "../../../../models/User";
import { APIConnecterService } from "../../../../services/apiconnecter.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  @Output() cancelInput: EventEmitter<any> = new EventEmitter();

  constructor(
    private connector: APIConnecterService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUserHandler = () => {
    const user = new User(
      this.email,
      this.password,
      this.firstname,
      this.lastname,
    )

    if (this.password === this.confirmPassword) {
      console.log(user);

      // Send information to server and switch to user dashboard
      this.connector.createUser(user).subscribe({
        next: (data) => {
          console.log(data);

          localStorage.setItem("token", data.token)
          
          // send to dashboard
          this.router.navigateByUrl("/dashboard");
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log("Done");
        }
      });
    } else {
      console.log("Please enter the correct password and confirm.")
    }
  }

  cancelHandler = () => {
    this.cancelInput.emit();
  }
}
