import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path : 'produit', component : ProduitComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
