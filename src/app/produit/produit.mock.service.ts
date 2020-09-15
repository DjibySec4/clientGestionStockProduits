import { Injectable } from '@angular/core';
import { Produit } from "../shared/produit"

@Injectable()
export class ProduitMockSercice{

  private produits: Produit[] = [];

  constructor()
  {
    let p1 : Produit = new Produit("Livre", 50, 20);
    let p2 : Produit = new Produit("Cahier", 200, 5.25);
    let p3 : Produit = new Produit("Stylo", 500, 2.10);

    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
  }

  public getProduits(): Produit[]
  {
    return this.produits;
  }
}
