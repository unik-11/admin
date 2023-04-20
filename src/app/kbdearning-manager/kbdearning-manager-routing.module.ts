import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { KbdcompetitionsComponent } from '../kbdcompetitions/kbdcompetitions.component';
import { KbdearningManagerComponent } from './kbdearning-manager.component';

const routes: Routes = [{
  path:'',
  component: KbdearningManagerComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdearningManagerRoutingModule { }
