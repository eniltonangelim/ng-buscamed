import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { FarmaciaRoutingModule } from './farmacia.routing.module';

import { FormRegisterFarmaciaComponent } from '../forms-template/form-register-farmacia/form-register-farmacia.component';
import { FarmaciaComponent } from './farmacia.component';
import { ListItemComponent } from '../lists-item/list-item.component';

import { FarmaciaService } from './farmacia.service';
import { PagerService } from '../pager/pager.service';
import { FarmaciaStatisticComponent } from './../statistics/farmacia-statistic/farmacia-statistic.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FarmaciaRoutingModule
  ],
  declarations: [
    FarmaciaComponent,
    FormRegisterFarmaciaComponent,
    ListItemComponent,
    FarmaciaStatisticComponent
  ],
  providers: [FarmaciaService, PagerService]
})
export class FarmaciaModule { }
