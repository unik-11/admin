import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbcompetitionsComponent } from './bsbcompetitions.component';

const routes: Routes = [
  {
    path: '',
    component: BsbcompetitionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbcompetitionsRoutingModule { }
