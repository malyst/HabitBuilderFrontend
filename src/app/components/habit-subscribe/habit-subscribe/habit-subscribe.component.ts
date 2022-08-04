import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIConnecterService } from 'src/app/services/apiconnecter.service';
import { HabitService } from 'src/app/services/habit.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-habit-subscribe',
  templateUrl: './habit-subscribe.component.html',
  styleUrls: ['./habit-subscribe.component.css']
})
export class HabitSubscribeComponent implements OnInit {

  //habitId is returned from HTML Template
  habitId: number = 0;
  //userId needs to come from somewhere


  constructor(private userService: APIConnecterService, private jwtService:JwtService) { }

  ngOnInit(): void {
  }
  /*This Method needs to associate a reward with a habitId(which is received from this HTML template) */
  subscribe(){ 
    let token = localStorage.getItem("token");
    var decoded = this.jwtService.DecodeToken(token!);
    let decoded2 = JSON.stringify(decoded);
    let userId = JSON.parse(decoded2)["nameid"];
    console.log( "\nUser Id"  + userId );

    var body = {
      "userId": userId,
      "habitId" : this.habitId,
      "dailyCompletion": 0,
      "monthlyCompletion": 0,
      "yearlyCompletion": 0
    }
    this.userService.associateUserHabit(body).subscribe(response => {
      console.log(response);
    }, error => {console.log(error)});

  }

}