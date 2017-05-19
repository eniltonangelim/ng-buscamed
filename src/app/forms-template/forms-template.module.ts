import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormsTemplateRoutingModule } from './forms-template.routing.module';
import { FormRegisterFarmaciaComponent } from './form-register-farmacia/form-register-farmacia.component';
import { CidadesService } from './../thirdy-party-api/cidades.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsTemplateRoutingModule
  ],
  declarations: [
    FormRegisterFarmaciaComponent
  ],
  providers: [CidadesService]
})
export class FormsTemplateModule { }