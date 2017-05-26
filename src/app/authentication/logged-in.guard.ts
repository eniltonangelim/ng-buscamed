/* tslint:disble max-line-length */
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService, AuthState } from './authentication.service';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class LoggedInGuard implements CanActivate {

    loggedIn:boolean;
    private authChangeSubscription_: Subscription;

    constructor(private authService: AuthenticationService) {
        this.authChangeSubscription_ = 
            authService.authChange.subscribe(
                newAuthState =>
                this.loggedIn = (newAuthState === AuthState.LoggedIn)
            );        
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            const isLoggedIn = this.loggedIn;
            return isLoggedIn;
    }

}

