import { Component, OnInit } from '@angular/core';
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
  userHabits : any = []

  ngOnInit(): void {

  }
  clickHandler(){
    this.getHabitIds();
    console.log("hi" + this.habitIdList);
    this.populateHabitIdList();
    this.getHabits();

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
      console.log(this.habitIdList[i]);
    } 
  }

  getHabits(){
    for(let i = 0; i<this.habitIdList.length; i++){
      this.habitService.getHabit(this.habitIdList[i]).subscribe( response =>{
        this.userHabits = (response);
    }, error => {console.log(error)})
    }
    this.habitIdList = [];

  }


}