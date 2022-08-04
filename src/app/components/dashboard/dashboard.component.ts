import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { APIConnecterService } from "../../services/apiconnecter.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  habitsFromParent: any;
  isVisible: boolean = false;

  constructor(private connector: APIConnecterService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }

  formIsVisible = () => {
    this.isVisible = !this.isVisible;
  }

}
