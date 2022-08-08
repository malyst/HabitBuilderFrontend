import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habitUrl = 'https://localhost:7286/api';
  userUrl = 'https://localhost:7048/api';
  habits : any = {};

  constructor(private http: HttpClient) { }


  createHabit(model: any){
    return this.http.post(this.habitUrl + '/habits', model);
  }
  associateHabitReward(habitId: number, rewardId: number){
    const params = new HttpParams()
      .append('param1', habitId)
      .append('param2', rewardId);

    return this.http.post(this.habitUrl + '/habits', null, {params});
  }

  getHabit(habitId : number){
    const params = new HttpParams().append('id', habitId);
    console.log(params);
    return this.http.get(`${this.habitUrl}/habits/${habitId}`)
  }

}