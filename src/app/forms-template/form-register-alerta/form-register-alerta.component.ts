import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { 
  FormBuilder, 
  FormGroup, 
  FormControl, 
  AbstractControl,
  Validators 
} from '@angular/forms';

import { Alerta } from '../../model/alerta.model';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-form-register-alerta',
  templateUrl: './form-register-alerta.component.html',
  styleUrls: ['./form-register-alerta.component.css']
})
export class FormRegisterAlertaComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'precoAlvo': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
