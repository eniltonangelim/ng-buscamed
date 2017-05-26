import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoComponent } from './medicamento.component';
import { FormRegisterMedicamentoComponent } from '../forms-template/form-register-medicamento/form-register-medicamento.component';
import { MedicamentoListItemComponent } from '../lists-item/medicamento/medicamento-list-item.component';

const MedicamentoRoutes: Routes = [
    { path: '', component: MedicamentoComponent, children: [
        {path: 'lista', component: MedicamentoListItemComponent },
        {path: 'novo', component: FormRegisterMedicamentoComponent},
        {path: ':id/editar', component: FormRegisterMedicamentoComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(MedicamentoRoutes)],
    exports: [RouterModule]
})

export class MedicamentoRoutingModule {}

export const MedicamentoComponents = [
    MedicamentoComponent,
    MedicamentoListItemComponent,
    FormRegisterMedicamentoComponent
]