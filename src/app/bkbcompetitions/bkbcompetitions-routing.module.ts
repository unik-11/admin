import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbcompetitionsComponent } from './bkbcompetitions.component';

const routes: Routes = [
  {
    path: '',
    component: BkbcompetitionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbcompetitionsRoutingModule { }
