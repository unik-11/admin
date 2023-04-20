import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkyfantasyPointsComponent } from './hkyfantasy-points.component';

const routes: Routes = [
  {
    path: '',
    component: HkyfantasyPointsComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkyfantasyPointsRoutingModule { }
