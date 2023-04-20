import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FteditTeamComponent } from './ftedit-team.component';

const routes: Routes = [{
  path:'',
  component:FteditTeamComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FteditTeamRoutingModule { }
