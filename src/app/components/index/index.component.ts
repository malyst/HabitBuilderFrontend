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

  clickHandler = (e: any) => {
    if (e.target.name === "register") {
      this.state = "register";

      this.router.navigateByUrl("/register");
    }

    if (e.target.name === "login") {
      this.state = "login";

      this.router.navigateByUrl("/login");
    }
  }

  cancelHandler = () => {
    this.state = "";

    this.router.navigateByUrl("/")
  }
}
