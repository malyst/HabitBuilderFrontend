import { Component, OnInit } from '@angular/core';
import { Reward } from '../../../../../models/Reward';
import { APIConnecterService } from '../../../../../services/apiconnecter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-popup',
  templateUrl: './reward-popup.component.html',
  styleUrls: ['./reward-popup.component.css'],
})
export class RewardPopupComponent implements OnInit {
  name: string = '';
  description: string = '';
  cost: number = 0;

  constructor(private connector: APIConnecterService, private router: Router) {}

  ngOnInit(): void {}

  createUserReward = () => {
    const reward = new Reward(this.name, this.description, this.cost);

    this.connector.createReward(reward).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('/dashboard');
      },

      complete: () => {
        console.log('Done');
      },
    });
  };
}