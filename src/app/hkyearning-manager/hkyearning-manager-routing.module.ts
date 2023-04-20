import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkyearningManagerComponent } from './hkyearning-manager.component';

const routes: Routes = [
  {
    path : '',
    component :  HkyearningManagerComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkyearningManagerRoutingModule { }
