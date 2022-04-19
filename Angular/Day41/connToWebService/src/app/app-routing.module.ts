import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FindAllUserComponent } from './find-all-user/find-all-user.component';
import { FindOneUserComponent } from './find-one-user/find-one-user.component';
import { StoreUserComponent } from './store-user/store-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: 'store', component: StoreUserComponent},
  {path: 'findAll', component: FindAllUserComponent},
  {path: 'findOne', component: FindOneUserComponent},
  {path: 'delete', component: DeleteUserComponent},
  {path: 'update', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
