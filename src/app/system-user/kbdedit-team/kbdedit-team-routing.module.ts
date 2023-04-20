import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdeditTeamComponent } from './kbdedit-team.component';

const routes: Routes = [{
  path:'',
  component:KbdeditTeamComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdeditTeamRoutingModule { }
