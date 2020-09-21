import { Observable } from 'rxjs';

// Ce crud est partagé par tous les fic qui ont besoin d'un crud (produit et user pr notre cas)

export interface CrudService
{
    //Recupere un produit depuis le serveur
    getAll(): Observable<any>;

    //Ajoute un produit depuis le serveur
    add(produit):  Observable<any>;

    //Modifie un produit depuis le serveur
    update(produit):  Observable<any>;

    //Supprime un produit depuis le serveur
    delete(id):  Observable<any>;
}
