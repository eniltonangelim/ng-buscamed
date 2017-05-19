import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  FormRegisterFarmaciaComponent  } from './form-register-farmacia/form-register-farmacia.component';

const formsTemplateRoutes: Routes = [
    { path: '', component: FormRegisterFarmaciaComponent, children: [
        {path: 'novo', component: FormRegisterFarmaciaComponent},
        {path: ':id', component: FormRegisterFarmaciaComponent},
        {path: ':id/editar', component: FormRegisterFarmaciaComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(formsTemplateRoutes)],
    exports: [RouterModule]
})

export class FormsTemplateRoutingModule {}