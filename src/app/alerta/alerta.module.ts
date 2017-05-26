import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AlertaService } from './alerta.service';
import { AlertaRoutingModule, ALERTA_COMPONENTS } from './alerta.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AlertaRoutingModule
  ],
  declarations: [ALERTA_COMPONENTS],
  providers: [AlertaService]
})
export class AlertaModule { }
