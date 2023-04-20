import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdleaderboardComponent } from './kbdleaderboard.component';

const routes: Routes = [{
  path:'',
  component:KbdleaderboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdleaderboardRoutingModule { }
