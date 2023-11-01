import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";

import { AuthService } from "../../services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                const authRequired = route.data['authRequired'];
                if(authRequired === undefined || !!user === authRequired) return true;
                const returnUrl = route.url.map(u => u.path).join('/');
                return !!user ? this.router.createUrlTree([`/tour`], { queryParams: { returnUrl }}) : this.router.createUrlTree([`/auth/login`], { queryParams: { returnUrl }});
            })
        )
    }
}