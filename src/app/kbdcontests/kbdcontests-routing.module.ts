import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KbdcontestsComponent}from "./kbdcontests.component"


const routes: Routes = [{
  path: '',
  component: KbdcontestsComponent
},
{
  path: 'contest-detail/:contestId',
  loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdcontestsRoutingModule { }
