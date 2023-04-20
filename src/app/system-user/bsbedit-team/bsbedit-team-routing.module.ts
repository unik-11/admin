import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbeditTeamComponent } from './bsbedit-team.component';

const routes: Routes = [{
  path:'',
  component:BsbeditTeamComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbeditTeamRoutingModule { }
