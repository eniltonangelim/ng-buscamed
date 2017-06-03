import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService, AuthState } from './authentication/authentication.service';
import {Subscription} from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { visibleToggle } from './_animations/visibleToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [visibleToggle]
})
export class AppComponent implements OnDestroy {
  
  loggedIn:boolean;
  private authChangeSubscription_: Subscription;
  private state: string = "hidden";
  private user_id: string;

  constructor(private authService: AuthenticationService, private router: Router) {
      this.authChangeSubscription_ = 
          authService.authChange.subscribe(
              newAuthState => {
                this.loggedIn = (newAuthState === AuthState.LoggedIn)
                this.user_id = this.loggedIn ? this.authService.getUserLogged().nome : 'Usuário'
              }
      );        
  }

  ngOnDestroy() {
    this.authChangeSubscription_.unsubscribe();
  }

  logout() {
    this.router.navigate(["login"])
    this.authService.logout();
  }

  private toggleState(): void {
    if (this.state == 'hidden') {
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }


}