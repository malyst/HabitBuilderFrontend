import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'HabitBuilder';
  state: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onClick = (e: any) => {
    if (e.target.name === "register") {
      console.log(e.target.name)

      this.state = "register";

      this.router.navigateByUrl("/register");
    }

    if (e.target.name === "login") {
      console.log(e.target.name)

      this.state = "login";

      this.router.navigateByUrl("/login");
    }
  }
}
