import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertaComponent } from './alerta.component';
import { FormRegisterAlertaComponent } from '../forms-template/form-register-alerta/form-register-alerta.component';
import { AlertaListItemComponent } from '../lists-item/alerta/alerta-list-item.component';

const AlertaRoutes: Routes = [
    { path: '', component: AlertaComponent, children: [
        {path: 'lista', component: AlertaListItemComponent },
        {path: 'novo', component: FormRegisterAlertaComponent},
        {path: ':id/editar', component: FormRegisterAlertaComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(AlertaRoutes)],
    exports: [RouterModule]
})

export class AlertaRoutingModule {}

export const ALERTA_COMPONENTS =[
    AlertaComponent,
    AlertaListItemComponent,
    FormRegisterAlertaComponent
]