import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BkbfixturesComponent } from './bkbfixtures.component';

const routes: Routes = [{
  path: '',
  component: BkbfixturesComponent
  },
  {
    path: 'bkbfixture-detail/:fixtureId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkbfixturesRoutingModule { }
