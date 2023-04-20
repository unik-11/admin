import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtleaderboardDetailsComponent } from './ftleaderboard-details.component';

const routes: Routes = [{
  path:'',
  component:FtleaderboardDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtleaderboardDetailsRoutingModule { }
