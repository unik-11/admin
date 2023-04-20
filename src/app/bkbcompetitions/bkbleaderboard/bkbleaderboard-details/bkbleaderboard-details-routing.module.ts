import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbleaderboardDetailsComponent } from './bkbleaderboard-details.component';

const routes: Routes = [{
  path:'',
  component:BkbleaderboardDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbleaderboardDetailsRoutingModule { }
