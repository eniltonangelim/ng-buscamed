import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmaciaComponent } from './farmacia.component';
import { FormRegisterFarmaciaComponent } from '../forms-template/form-register-farmacia/form-register-farmacia.component';
import { FarmaciaStatisticComponent } from '../statistics/farmacia-statistic/farmacia-statistic.component';

const FarmaciaRoutes: Routes = [
    { path: '', component: FarmaciaComponent, children: [
        {path: 'novo', component: FormRegisterFarmaciaComponent},
        {path: ':id/editar', component: FormRegisterFarmaciaComponent},
        {path: 'stats', component: FarmaciaStatisticComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(FarmaciaRoutes)],
    exports: [RouterModule]
})

export class FarmaciaRoutingModule {}