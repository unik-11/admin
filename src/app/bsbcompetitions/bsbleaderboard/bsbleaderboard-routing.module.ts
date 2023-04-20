import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbleaderboardComponent } from './bsbleaderboard.component';

const routes: Routes = [{
  path : '',
  component : BsbleaderboardComponent
 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbleaderboardRoutingModule { }
