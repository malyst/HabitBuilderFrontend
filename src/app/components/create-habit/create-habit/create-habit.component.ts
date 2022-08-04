import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HabitService } from 'src/app/services/habit.service';
import { environment } from 'src/environments/environment';
import { Habit } from "../../../models/Habit";

@Component({
  selector: 'app-create-habit',
  templateUrl: './create-habit.component.html',
  styleUrls: ['./create-habit.component.css']
})
export class CreateHabitComponent implements OnInit {

  model : any = {}
  habitId: number = -1;
  rewardId: number = -1;

  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
    this.model.duration = 0;
    this.model.count = 0;
    this.model.dailyCompletion = 0;
    this.model.monthlyCompletion = 0;
    this.model.yearlyCompletion = 0;
  }

  createHabit(){
    this.habitService.createHabit(this.model).subscribe(response => {
      console.log(response);

    }, error => {
      console.log(error);
    });
  }
  associateHabitReward(){
    this.habitService.associateHabitReward(this.habitId, this.rewardId).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }







}