import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'users',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'users',canActivate:[authGuard], component:UsersComponent},
    {path:'user/:id',canActivate:[authGuard], component:UserDetailsComponent},
    {path:'**', component:PageNotFoundedComponent},
];
