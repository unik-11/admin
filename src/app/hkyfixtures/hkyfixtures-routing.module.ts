import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkyfixturesComponent } from './hkyfixtures.component';

const routes: Routes = [{
  path: '',
  component: HkyfixturesComponent
  },
  {
    path: 'hkyfixture-detail/:fixtureId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
    }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkyfixturesRoutingModule { }
