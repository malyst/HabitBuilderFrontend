import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HabitBuilder';

  constructor(private router: Router) {}

  onClick = (e: any) => {
    console.log(e.target.name)

    if (e.target.name === "register") {
      this.router.navigateByUrl("/register");
    }

    if (e.target.name === "login") {
      this.router.navigateByUrl("/login");
    }
  }
}
