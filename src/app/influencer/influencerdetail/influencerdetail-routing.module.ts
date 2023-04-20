import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerdetailComponent } from './influencerdetail.component';


const routes: Routes = [{
  path:'',
  component:InfluencerdetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerdetailRoutingModule { }
