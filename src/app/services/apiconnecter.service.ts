import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from "../models/User";
import { Habit } from "../models/Habit";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIConnecterService {

  constructor(private http: HttpClient) {}
  
  public createUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.userAPIUrl}/User/Register`, user);
  }

  public loginUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.userAPIUrl}/User/Login`, user);
  }

  public loggedIn() {
    return !!localStorage.getItem("token");
  }

  public getToken() {
    return localStorage.getItem("token");
  }

  public getHabits() : Observable<Habit> {
    return this.http.get<Habit>(`${environment.habitAPIUrl}/Habits`);
  }

  public createHabit(habit: Habit) : Observable<Habit> {
    return this.http.post<Habit>(`${environment.habitAPIUrl}/Habits`, habit)
  }
}
