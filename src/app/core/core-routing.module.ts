import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuardService],
        loadChildren: '../admin/admin.module#AdminModule'
    },
    {
        path: 'form',
        loadChildren: '../form/form.module#FormModule'
    },
    {
        path: 'testeable',
        loadChildren: '../testeable/testeable.module#TesteableModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
