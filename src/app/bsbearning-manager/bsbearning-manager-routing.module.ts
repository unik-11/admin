import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbearningManagerComponent } from './bsbearning-manager.component';

const routes: Routes = [{

  path : '',
  component :   BsbearningManagerComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbearningManagerRoutingModule { }
