import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from "../models/User";
import { Habit } from "../models/Habit";
import { UserHabit } from "../models/UserHabit"
import { Reward } from "../models/Reward"
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

  public getProfile() : Observable<User>{
    return this.http.get<User>(`${environment.userAPIUrl}/User/Profile`);
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

  public getUserHabits(userId : string)  : Observable<UserHabit> {
    var params = new HttpParams().append('param1', userId);
    console.log(params);
    return this.http.get<UserHabit>(`${environment.userAPIUrl}/UserHabits`, {params});
  }

  public associateUserHabit(body : any) {
    return this.http.post(`${environment.userAPIUrl}/UserHabits`, body)
  }

  public createHabit(habit: Habit) : Observable<Habit> {
    return this.http.post<Habit>(`${environment.habitAPIUrl}/Habits`, habit)
  }

  public createReward(reward: Reward): Observable<Reward> {
    return this.http.post<Reward>(`${environment.habitAPIUrl}/Rewards`, reward);
  }
}
