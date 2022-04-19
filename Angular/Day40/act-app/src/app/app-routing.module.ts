import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DislikeComponent } from './dislike/dislike.component';
import { LikeComponent } from './like/like.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'success/:name/:password', component: SuccessComponent, canActivate: [AuthenticationGuard], children: [
    // {path: '', component: ListComponent},
    {path: 'logout', component: LogoutComponent},                     
    {path: "list", component: ListComponent, children: [
      {path: 'like', component: LikeComponent},
      {path: 'dislike', component: DislikeComponent},
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
