import { Component, OnInit } from '@angular/core';
import { APIConnecterService } from "../../services/apiconnecter.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  habitsFromParent: any;

  constructor(private connector: APIConnecterService) {}

  ngOnInit(): void {
    this.connector.getHabits().subscribe(data => {
			console.warn(data);
			
			this.habitsFromParent = data;
		})
  }

}
