
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AUTH_PROVIDERS } from './authentication/authentication.service';
import { LoggedInGuard } from './authentication/logged-in.guard';

import { HomeComponent } from './home/home.component';
import { FormUserLoginComponent } from './forms-template/form-user-login/form-user-login.component';
import { FormRegisterUserComponent } from './forms-template/form-register-user/form-register-user.component';

const appRoutes: Routes = [
    { path: 'farmacias', 
        loadChildren: 'app/farmacia/farmacia.module#FarmaciaModule',
        canActivate: [LoggedInGuard]
    },
    {
        path: 'medicamentos',
        loadChildren: 'app/medicamento/medicamento.module#MedicamentoModule',
        canActivate: [LoggedInGuard]
    },
    {
        path: 'alertas',
        loadChildren: 'app/alerta/alerta.module#AlertaModule',
        canActivate: [LoggedInGuard]
    },
    {
        path: 'login',
        component: FormUserLoginComponent
    },
    {
        path: 'signup',
        component: FormRegisterUserComponent
    },
    { path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const rootRouterGuards = [
    AUTH_PROVIDERS,
    LoggedInGuard
]

export const rootRouterComponents = [
    HomeComponent,
    FormUserLoginComponent,
    FormRegisterUserComponent
]