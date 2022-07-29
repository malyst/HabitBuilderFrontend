import { Component } from '@angular/core';
import { APIConnecterService } from "./services/apiconnecter.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  habitsFromParent: any;

  constructor(private connector: APIConnecterService) {
    this.connector.getHabits().subscribe(data => {
      console.warn(data);
      
      this.habitsFromParent = data;
    })

  }
}
