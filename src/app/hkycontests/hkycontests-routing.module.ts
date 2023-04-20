import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkycontestsComponent } from './hkycontests.component';

const routes: Routes = [
  {
    path: '',
    component: HkycontestsComponent
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
export class HkycontestsRoutingModule { }
