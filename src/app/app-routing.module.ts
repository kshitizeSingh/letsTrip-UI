import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent,canActivate: [AuthGuard] },
  { path: "user", component: UserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
