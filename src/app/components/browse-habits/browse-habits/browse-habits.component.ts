import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-browse-habits',
  templateUrl: './browse-habits.component.html',
  styleUrls: ['./browse-habits.component.css']
})
export class BrowseHabitsComponent implements OnInit {

  constructor(private http : HttpClient) { }
  habits : any
  ngOnInit(): void {
    this.getAllHabits();
  }
  getAllHabits(){
    return this.http.get('https://localhost:7267/api/habits').subscribe(response =>{
      this.habits = response;
    });
  }
}