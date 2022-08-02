import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() formEventEmitter = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    localStorage.clear();

    this.router.navigateByUrl("");
  }

  formHandler = () => {
    this.formEventEmitter.emit(true);
  }

}