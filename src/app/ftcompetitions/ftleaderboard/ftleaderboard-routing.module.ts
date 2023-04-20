import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FtleaderboardComponent} from './ftleaderboard.component';
const routes: Routes = [{
  path:'',
  component:FtleaderboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtleaderboardRoutingModule { }
