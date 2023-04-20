import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtcompetitionsComponent} from './ftcompetitions.component';

const routes: Routes = [{
  path: '',
  component: FtcompetitionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtcompetitionsRoutingModule {
}
