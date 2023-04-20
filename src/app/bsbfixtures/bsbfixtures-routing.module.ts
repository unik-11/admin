import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsbfixturesComponent } from './bsbfixtures.component';

const routes: Routes = [
  {
    path: '',
  component: BsbfixturesComponent
  },
  {
    path: 'bsbfixture-detail/:fixtureId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsbfixturesRoutingModule { }
