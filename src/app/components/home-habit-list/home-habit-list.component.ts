import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-habit-list',
  templateUrl: './home-habit-list.component.html',
  styleUrls: ['./home-habit-list.component.css']
})
export class HomeHabitListComponent implements OnInit {
  @Input() habits: any;

  constructor() { }

  ngOnInit(): void {
  }

}
