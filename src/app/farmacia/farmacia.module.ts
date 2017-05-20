import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { FarmaciaRoutingModule } from './farmacia.routing.module';

import { FormRegisterFarmaciaComponent } from '../forms-template/form-register-farmacia/form-register-farmacia.component';
import { FarmaciaComponent } from './farmacia.component';
import { ListItemComponent } from '../lists-item/list-item.component';

import { FarmaciaService } from './farmacia.service';
import { PagerService } from '../pager/pager.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FarmaciaRoutingModule
  ],
  declarations: [
    FarmaciaComponent,
    FormRegisterFarmaciaComponent,
    ListItemComponent
  ],
  providers: [FarmaciaService, PagerService]
})
export class FarmaciaModule { }
