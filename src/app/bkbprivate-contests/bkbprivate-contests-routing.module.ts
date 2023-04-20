import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbprivateContestsComponent } from './bkbprivate-contests.component';

const routes: Routes = [
  {
    path: '',
    component: BkbprivateContestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbprivateContestsRoutingModule { }
