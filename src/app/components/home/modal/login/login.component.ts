import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

import { User } from "../../../../models/User";
import { APIConnecterService } from "../../../../services/apiconnecter.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  @Output() cancelInput: EventEmitter<any> = new EventEmitter();

  constructor(
    private connector: APIConnecterService, 
    private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    var date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    
    if(day < 10){
      let dayString = day.toString();
      let monthString = month.toString();
      let dateString = monthString+"0"+dayString;
      day = parseInt(dateString);
    }
    console.log("month: " + month + " day: " + day + " type: " + typeof(month));
  }
  
  async loginUserHandler() {
    const user = new User(
      this.email,
      this.password
    )
      // send information to server
      await this.connector.loginUser(user).subscribe({
        next: (data) => {
          localStorage.setItem("token", data.token)

          // send to dashboard
          this.router.navigateByUrl("/dashboard");
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log("Done");
        }
      })
  }

  cancelHandler = () => {
    this.cancelInput.emit();
  }
}
