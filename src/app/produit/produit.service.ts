import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URLS } from '../config/api.url.config';
import { Produit } from '../shared/produit';


@Injectable()
export class ProduitService
{
    constructor(private http : HttpClient){}

    //Recupere un produit depuis le serveur
    getProduits() : Observable<any>
    {
      return this.http.get(API_URLS.PRODUITS_URLS);
    }

    //Ajoute un produit depuis le serveur
    addProduit(produit : Produit):  Observable<any>
    {
      return this.http.post(API_URLS.PRODUITS_URLS, produit);
    }

    //Modifie un produit depuis le serveur
    updateProduit(produit : Produit):  Observable<any>
    {
      return this.http.put(API_URLS.PRODUITS_URLS, produit);
    }

    //Supprime un produit depuis le serveur
    deleteProduit(ref : string):  Observable<any>
    {
      return this.http.delete(API_URLS.PRODUITS_URLS + `/${ref}`);
    }
}
