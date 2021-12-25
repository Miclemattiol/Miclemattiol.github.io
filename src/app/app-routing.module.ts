import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSonoComponent } from './views/chi-sono/chi-sono.component';
import { HomeComponent } from './views/home/home.component';
import { LeMieEsperienzeComponent } from './views/le-mie-esperienze/le-mie-esperienze.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chi_sono',
    component: ChiSonoComponent
  },
  {
    path: 'le_mie_esperienze',
    component: LeMieEsperienzeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
