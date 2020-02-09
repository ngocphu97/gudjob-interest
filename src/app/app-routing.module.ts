import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyCoffeeLayoutComponent } from '@app/layout';

const routes: Routes = [
  {
    path: '',
    component: BuyCoffeeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


