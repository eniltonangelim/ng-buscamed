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
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css']
})
export class FormRegisterUserComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  usuarioNome: string;
  myForm: FormGroup;
  showNegativeMessage: boolean = false;
  showPositiveMessage: boolean = false;
  
  constructor(
      private fb: FormBuilder,
      private authService: AuthenticationService
      ) { 
    this.myForm = fb.group({
      'nome':  ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'senha': ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit(usuario: Usuario){
    this.cadastrar(usuario);
  }

  cadastrar(usuario: Usuario) {
    this.authService.cadastrar(usuario).subscribe(
      ondata => { 
        this.usuarioNome = usuario.nome;
        this.showPositiveMessage = true;
      },
      onerror => this.showNegativeMessage = false
    );
  }

}