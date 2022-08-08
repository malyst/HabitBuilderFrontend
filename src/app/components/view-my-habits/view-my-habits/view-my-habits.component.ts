import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConnecterService } from 'src/app/services/apiconnecter.service';
import { HabitService } from 'src/app/services/habit.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-view-my-habits',
  templateUrl: './view-my-habits.component.html',
  styleUrls: ['./view-my-habits.component.css']
})
export class ViewMyHabitsComponent implements OnInit {

  constructor(private jwtService: JwtService, private habitService : HabitService, private userService : APIConnecterService) { }

  habits : any = []
  habitIdList : any = []
  userHabits: any = [];
  habitName: string[] = [];
  habitDescription: string[] = [];
  habitId: number[] = [];
  habitDuration: number[] = [];
  habitReward: string[] = [];
  reward: any = {};
  today: any;

  ngOnInit(): void {
    this.calculateDate();
    this.getHabitIds();
    console.log("hi" + this.habitIdList);
    this.populateHabitIdList();
    this.getHabits();
    this.calculateDuration();
  }
  clickHandler(){
    this.getHabitIds();
    console.log("hi" + this.habitIdList);
    this.populateHabitIdList();
    this.getHabits();
    this.userHabits = [];
  }

  getHabitIds(){
    let token = localStorage.getItem("token");    
    var decoded = this.jwtService.DecodeToken(token!);
    console.log(decoded);
    let decoded2 = JSON.stringify(decoded);   
    let userId = JSON.parse(decoded2)["nameid"];
    this.userService.getUserHabits(userId).subscribe(response => {
      this.habits = (response);
    })  

}
  populateHabitIdList(){
    for(let i = 0; i<this.habits.length; i++){
      this.habitIdList.push(this.habits[i].habitId);
    } 
  }
  getHabits(){
    for(let i = 0; i<this.habitIdList.length; i++){
      this.userService.getHabit(this.habitIdList[i]).subscribe( response =>{
      this.userHabits.push(response);
      console.log(JSON.stringify(response))
    }, error => {console.log(error)})
    }    
    this.habitIdList = [];
  }

  calculateDate(){
    var date = new Date();
    let day = date.getDate();
    let month = date.getMonth();

    if(day < 10){
      let dayString = day.toString();
      let monthString = month.toString();
      let dateString = monthString+"0"+dayString;
      this.today = parseInt(dateString);
    }else{
      let dayString = day.toString();
      let monthString = month.toString();
      let dateString = monthString+dayString;
      this.today = parseInt(dateString);
    }
    
  }
  calculateDuration(){
    for(let i = 0; i<this.userHabits.length; i++){
      let days = ((this.today - this.userHabits[i].dateCreated) + 1);
      this.userHabits[i].duration = (Math.floor(60*(1.01)**days ));
    }
  }

}