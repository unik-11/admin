import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbeditTeamComponent } from './bkbedit-team.component';

const routes: Routes = [{
  path:'',
  component:BkbeditTeamComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbeditTeamRoutingModule { }
