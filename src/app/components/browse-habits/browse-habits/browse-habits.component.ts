import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabitService } from 'src/app/services/habit.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APIConnecterService } from 'src/app/services/apiconnecter.service';
import { Habit } from 'src/app/models/Habit';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-browse-habits',
  templateUrl: './browse-habits.component.html',
  styleUrls: ['./browse-habits.component.css'],
})
export class BrowseHabitsComponent implements OnInit {
  page = 1;
  pageSize = 5;
  habitsList$!: Observable<any[]>;

  constructor(private apiConnectorService: APIConnecterService) {}

  //habits: any;
  ngOnInit(): void {
    this.habitsList$ = this.apiConnectorService.getHabits();
    // this.getAllHabits();
  }
  /*
  getAllHabits() {
    return this.http
      .get('https://localhost:7267/api/habits')
      .subscribe((response) => {
        this.habits = response;
      });
  }
  */
}
