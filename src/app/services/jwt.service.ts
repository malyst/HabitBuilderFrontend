import { Injectable, NgModule } from '@angular/core';
import jwtDecode, {JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  DecodeToken(token : string) {
    var c = jwtDecode<JwtPayload>(token);

    console.log("::::::::::::" + JSON.stringify(c));
    return jwtDecode<JwtPayload>(token);
  }
}