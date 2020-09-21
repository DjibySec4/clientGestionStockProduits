import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URLS } from '../config/api.url.config';

import { CrudService } from '../shared/crud.service';

// Recupere les meth de crud depuis le serveur

@Injectable()
export class UserService implements CrudService
{
    constructor(private http : HttpClient){}

    //Recupere tous les user depuis le serveur
    getAll() : Observable<any>
    {
      return this.http.get(API_URLS.USER_CRUD_URL);
    }

    //Ajoute un produit depuis le serveur
    add(user):  Observable<any>
    {
      return this.http.post(API_URLS.USER_CRUD_URL, user);
    }

    //Modifie un user depuis le serveur
    update(user):  Observable<any>
    {
      return this.http.put(API_URLS.USER_CRUD_URL, user);
    }

    //Supprime un user depuis le serveur
    delete(id):  Observable<any>
    {
      return this.http.delete(API_URLS.USER_CRUD_URL + `/${id}`);
    }
}
