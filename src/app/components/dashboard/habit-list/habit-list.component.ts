import { Component, Input, OnInit } from '@angular/core';
import { APIConnecterService } from "../../../services/apiconnecter.service";

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  @Input() habits: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.habits)
  }

}
