import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtearningManagerComponent } from './ftearning-manager.component';


const routes: Routes = [{
  path:'',
  component:FtearningManagerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtearningManagerRoutingModule { }
