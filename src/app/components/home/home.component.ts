import { Component, OnInit } from '@angular/core';
import { APIConnecterService } from "../../services/apiconnecter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	habitsFromParent: any;
	isLoggedIn: boolean = false;
	
	constructor(private connector: APIConnecterService) { }
	
	ngOnInit(): void {
		this.connector.getHabits().subscribe(data => {
			console.warn(data);
			
			this.habitsFromParent = data;
		})
	}

	loggedInHandler(e: any): void {
		this.isLoggedIn = e.loggedIn
	}
}
