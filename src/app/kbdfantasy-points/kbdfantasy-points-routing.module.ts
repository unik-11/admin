import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdfantasyPointsComponent } from './kbdfantasy-points.component';

const routes: Routes = [{
  path: '',
  component: KbdfantasyPointsComponent
  

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdfantasyPointsRoutingModule { }
