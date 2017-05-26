import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  FormBuilder, 
  FormGroup, 
  FormControl, 
  AbstractControl,
  Validators 
} from '@angular/forms';

import { Usuario } from '../../model/usuario.model';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-form-user-login',
  templateUrl: './form-user-login.component.html',
  styleUrls: ['./form-user-login.component.css']
})
export class FormUserLoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  myForm: FormGroup;
    showNegativeMessage: boolean = false;
  showPositiveMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { 
    this.myForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'senha': ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit(usuario: Usuario){
    this.login(usuario);
  }

  login(usuario: Usuario) {
    this.authService.login(usuario).subscribe(
      ondata => { 
        this.showPositiveMessage = true;
        this.router.navigate(['/']);
      },
      onerror => this.showNegativeMessage = false
    );
  }

}
