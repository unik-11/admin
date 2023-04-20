import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbleaderboardComponent } from './bkbleaderboard.component';

const routes: Routes = [{
 path : '',
 component : BkbleaderboardComponent 

}];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbleaderboardRoutingModule { }
