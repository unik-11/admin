import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdcompetitionsComponent } from './kbdcompetitions.component';

const routes: Routes = [{
  path: '',
  component: KbdcompetitionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdcompetitionsRoutingModule { }
