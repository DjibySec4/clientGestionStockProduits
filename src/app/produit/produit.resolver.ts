import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from './produit.service';

// Il faut un resolver pr auto-afficher la liste  d'élément.

@Injectable()
export class ProduitResolver implements Resolve<any>
{

    constructor(private produitService : ProduitService)
    {
    }

    resolve()
    {
        return this.produitService.getAll();
    }
}
