import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { APIConnecterService } from "../../../services/apiconnecter.service"
import { Habit } from "../../../models/Habit";

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css']
})
export class HabitFormComponent implements OnInit {
  constructor(private connector: APIConnecterService) { }

  ngOnInit(): void {
  }

  async onSubmit(f: NgForm) {
    const newHabit = new Habit(
      f.value.Name,
      f.value.Description
    )

    await this.connector.createHabit(newHabit).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Done");
      }
    });
  }
  

}
