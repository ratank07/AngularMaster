import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {Observable, pipe, throwError} from 'rxjs'
import { map, tap } from "rxjs/operators";
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private message: string;
  constructor(private router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    console.log('isauthenticated called token',localStorage.getItem('token'));
    console.log('decoed token',jwt_decode(localStorage.getItem('token')));


    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }
  isTokenExpired() : boolean {
    return false;
  }

  loginAdmin():void {
    localStorage.setItem('item',`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`);
    this.router.navigate(['/dashboard'])
  }

  login(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`);
    this.router.navigate(['dashboard']);
  }

  logout(): void {
    this.router.navigate(['login'])
  }

  decode(): any {
    return jwt_decode(localStorage.getItem('token'))
  }
}
