import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIConnecterService {

  constructor(private http: HttpClient) {

  }

  getData() {
    let url = "https://swapi.dev/api/people";

    return this.http.get(url);
  }
}
