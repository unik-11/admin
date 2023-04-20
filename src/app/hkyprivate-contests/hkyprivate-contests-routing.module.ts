import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkyprivateContestsComponent } from './hkyprivate-contests.component';

const routes: Routes = [
  {
    path: '',
    component: HkyprivateContestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkyprivateContestsRoutingModule { }
