import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean | UrlTree
    {
        return this.checkIfLogged(state.url) || this.router.createUrlTree(['/users']);
    }

    checkIfLogged(url:string) : boolean {
        console.log('no rights to access');
        return false;
    }
}