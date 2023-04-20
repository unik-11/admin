import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkyleaderboardComponent } from './hkyleaderboard.component';

const routes: Routes = [
  {
    path : '',
    component : HkyleaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkyleaderboardRoutingModule { }
