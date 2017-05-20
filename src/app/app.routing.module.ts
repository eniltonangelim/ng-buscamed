
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './authentication/auth.guard';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'farmacias', 
        loadChildren: 'app/farmacia/farmacia.module#FarmaciaModule'//,
        //canActivate: [AuthGuard]
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