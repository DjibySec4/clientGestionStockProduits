import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrudService } from '../shared/crud.service';
import { Produit } from "../shared/produit.model";

@Injectable()
export class ProduitMockSercice implements CrudService
{
  private produits: Produit[] = [];

  constructor()
  {
    let p1 : Produit = new Produit(1,"Livre", 50, 20);
    let p2 : Produit = new Produit(2,"Cahier", 200, 5.25);
    let p3 : Produit = new Produit(3,"Stylo", 500, 2.10);

    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
  }


  //Recupere tous les produit depuis le serveur
  getAll() : Observable<any>
  {
    return of(this.produits);
  }

  //Ajoute un produit depuis le serveur
  add(produit):  Observable<any>
  {
    return of("success");
  }

  //Modifie un produit depuis le serveur
  update(produit):  Observable<any>
  {
    return of("success");
  }

  //Supprime un produit depuis le serveur
  delete(id):  Observable<any>
  {
    return of("success");
  }
}
