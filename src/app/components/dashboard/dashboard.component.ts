import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  browseHabits : boolean = false;
  appCreatehabit : boolean  = false;
  viewMyHabits : boolean  = false;
  reward : boolean = false;

  ngOnInit(): void {
    
  }

  showViewMyHabits(){
    this.viewMyHabits = !this.viewMyHabits;
  }
  showCreateHabit(){
    this.appCreatehabit = !this.appCreatehabit;
  }
  showBrowseHabits(){
    this.router.navigateByUrl("/browsehabits");
  }
  showRewards(){
    this.reward = !this.reward;
  }
  
  

}
