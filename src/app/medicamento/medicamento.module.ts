import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MedicamentoRoutingModule, MedicamentoComponents } from './medicamento.routing.module';
import { PagerService } from '../pager/pager.service';
import { MedicamentoService } from './medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MedicamentoRoutingModule
  ],
  declarations: [MedicamentoComponents],
  providers: [ MedicamentoService, PagerService]
})
export class MedicamentoModule { }
