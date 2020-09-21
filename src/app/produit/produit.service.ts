import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URLS } from '../config/api.url.config';
import { Produit } from '../shared/produit.model';

import { CrudService } from '../shared/crud.service';

// Recupere les meth de crud depuis le serveur

@Injectable()
export class ProduitService implements CrudService
{
    constructor(private http : HttpClient){}

    //Recupere tous les produit depuis le serveur
    getAll() : Observable<any>
    {
      return this.http.get(API_URLS.PRODUITS_URLS);
    }

    //Ajoute un produit depuis le serveur
    add(produit):  Observable<any>
    {
      return this.http.post(API_URLS.PRODUITS_URLS, produit);
    }

    //Modifie un produit depuis le serveur
    update(produit):  Observable<any>
    {
      return this.http.put(API_URLS.PRODUITS_URLS, produit);
    }

    //Supprime un produit depuis le serveur
    delete(id):  Observable<any>
    {
      return this.http.delete(API_URLS.PRODUITS_URLS + `/${id}`);
    }
}
