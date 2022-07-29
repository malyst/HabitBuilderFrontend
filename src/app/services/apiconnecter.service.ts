import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from "../models/User";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIConnecterService {

  constructor(private http: HttpClient) {}
  
  public createUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/User/Register`, user);
  }
}
