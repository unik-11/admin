import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbcontestsComponent } from './bsbcontests.component';

const routes: Routes = [
  {
    path: '',
    component: BsbcontestsComponent
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
export class BsbcontestsRoutingModule { }
