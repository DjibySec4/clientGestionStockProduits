import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitResolver } from './produit/produit.resolver';
import { UserResolver } from './user/user.resolver';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : 'login',
     component : LoginComponent
  },
  {
    path : 'home',
     component : HomeComponent,
     children: [
      {
        //le tab resolver on le met k lorsqu'on gere le crud ds ce composant
        path : 'produit',
        component : ProduitComponent,
        resolve : {
          produits: ProduitResolver
        },
        outlet:'contentOutlet'
      },
      {
        path : 'dashboard',
         component : DashboardComponent,
         outlet:'contentOutlet'
      },
      {
        path : 'user',
         component : UserComponent,
         resolve : {
          users: UserResolver
        },
         outlet:'contentOutlet'
      },
     ]
  },
  {
    path : '',
     redirectTo : '/home',
      pathMatch : 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProduitResolver, UserResolver]
})
export class AppRoutingModule { }
