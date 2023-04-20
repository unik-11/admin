import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbcompetitionsComponent } from '../bkbcompetitions/bkbcompetitions.component';
import { BkbcontestsComponent } from './bkbcontests.component';

const routes: Routes = [
  {
    path: '',
    component: BkbcontestsComponent
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
export class BkbcontestsRoutingModule { }
