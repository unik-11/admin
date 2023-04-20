import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbprivateContestsComponent } from './bsbprivate-contests.component';

const routes: Routes = [
  {
    path: '',
    component: BsbprivateContestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbprivateContestsRoutingModule { }
