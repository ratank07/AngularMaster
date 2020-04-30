import { AuthGuard } from "./auth-guards.service";
import { AuthService } from "../../services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn:"root"
})
export class RoleGaurd implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
    const user = this.authservice.decode()
    console.log('decoded user obj', user.role);
    console.log('next.data',next.data.role);

    if(user.role === next.data.role) return true;
    this.router.navigate(['/404']);
    return false;
  }
}
