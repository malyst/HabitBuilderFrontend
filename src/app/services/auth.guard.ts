import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { APIConnecterService } from "./apiconnecter.service";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private connector: APIConnecterService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.connector.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("")

      return false;
    }
  }
}