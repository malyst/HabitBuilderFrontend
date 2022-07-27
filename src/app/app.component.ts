import { Component } from '@angular/core';
import { APIConnecterService } from "./apiconnecter.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data: APIConnecterService) {
    this.data.getData().subscribe(data => {
      console.warn(data);
    })
  }
}
