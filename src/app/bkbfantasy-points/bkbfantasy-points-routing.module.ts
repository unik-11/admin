import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbfantasyPointsComponent } from './bkbfantasy-points.component';

const routes: Routes = [
  {
  
    path: '',
    component: BkbfantasyPointsComponent
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbfantasyPointsRoutingModule { }
