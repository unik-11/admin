import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbearningManagerComponent } from './bkbearning-manager.component';
import { BkbearningManagerModule } from './bkbearning-manager.module';

const routes: Routes = [{

  path : '',
  component :   BkbearningManagerComponent
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbearningManagerRoutingModule { }
