import { Component, OnDestroy } from '@angular/core';

import { AuthenticationService, AuthState } from './authentication/authentication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loggedIn:boolean;
  private authChangeSubscription_: Subscription;

  constructor(private authService: AuthenticationService) {
      this.authChangeSubscription_ = 
          authService.authChange.subscribe(
              newAuthState =>
              this.loggedIn = (newAuthState === AuthState.LoggedIn)
          );        
  }

  ngOnDestroy() {
    this.authChangeSubscription_.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}