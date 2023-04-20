import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubadminPermissionComponent } from './subadmin-permission.component';

const routes: Routes = [{
  path:'',
  component:SubadminPermissionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubadminPermissionRoutingModule { }
