import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

let route : Routes = [
  {path: "", component: UserStoreComponent},
  {path: "store", component: UserStoreComponent},
  {path: "delete", component: UserDeleteComponent},
  {path: "userlist", component: UserListComponent},
  {path: 'success/:uid', component: RegisterSuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent, UserListComponent, UserStoreComponent, UserDeleteComponent, RegisterSuccessComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
