import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbfantasyPointsComponent } from './bsbfantasy-points.component';

const routes: Routes = [
  {
  
    path: '',
    component: BsbfantasyPointsComponent
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbfantasyPointsRoutingModule { }
