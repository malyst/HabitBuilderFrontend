import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() formEventEmitter = new EventEmitter();

  constructor(private router: Router, private jwtService : JwtService) { }
  user : any;
  ngOnInit(): void {
    let token = localStorage.getItem("token");    
    var decoded = this.jwtService.DecodeToken(token!);
    console.log(decoded);
    let decoded2 = JSON.stringify(decoded);   
    this.user = JSON.parse(decoded2)["email"];
  }

  logoutHandler() {
    localStorage.clear();

    this.router.navigateByUrl("");
  }

  formHandler = () => {
    this.router.navigateByUrl("/createhabit");
  }

}