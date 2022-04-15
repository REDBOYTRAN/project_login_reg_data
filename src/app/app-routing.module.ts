import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home';
import { AuthGuard } from './shared/helpers';

const accountModule = () => import('./features/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./features/users/users.module').then(x => x.UsersModule);
const dataModule = () => import('./features/table/table.module').then(x => x.TableModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'data', loadChildren: dataModule, canActivate: [AuthGuard]},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }