import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../shared/produit';

import {ProduitMockSercice} from './produit.mock.service';
import {ProduitService} from './produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Produit[];

  produitForm : FormGroup;

  operation : string = 'add';

  selectedProduit : Produit;

  /**
   * produitMockService c'est pour les fausses données mis dans produits.mock.services.ts
   * produitService c'est pour les vraies données de produits.services.ts et dont les données proviennent du serveur
   * fb c'est pour la creation du frm
  */
  constructor(private produitMockService : ProduitMockSercice, private fb : FormBuilder,
     private produitService : ProduitService, private route : ActivatedRoute)
  {
      this.createForm();
  }

  ngOnInit(): void {
    this.initProduit();

    //Afficher la liste des produits
    //Methode 1 :
    //this.loadProduits();

    //Methode 2 : (Avec Resolver)
    this.produits = this.route.snapshot.data.produits;

     // Pr renseigner le tab produits avec de fausses données
    //this.produits = this.produitMockService.getProduits();
  }

  //Permet de creer un formulaire
  createForm()
  {
    //On creer un frm en gerant la validation
    this.produitForm = this.fb.group({
      ref : ["", Validators.required],
      quantite : '',
      pu : '',
    });
  }

  //cette methode appelle getProduits() definie dans produit.service.ts ki a son tour appeler celle qui qui est dans le serveur
  loadProduits()
  {
    this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      error => {console.log("Une erreur a été détécter lors des chargements des données du serveur ! ")},
      () => {console.log("Les produits ont été chargés depuis le serveur avec success !")}
    );
  }

  //cette methode appelle addProduit() definie dans produit.service.ts ki a son tour appeler celle qui qui est dans le serveur
  addProduit()
  {
      const p = this.produitForm.value;
      this.produitService.addProduit(p).subscribe(
        res => {
          //Apres avoir ajouter, on vide les champs et on return la nouvelle liste de produits
          this.initProduit();
          this.loadProduits();
        }
      );
  }

  //cette methode appelle updateProduit() definie dans produit.service.ts ki a son tour appeler celle qui qui est dans le serveur
  updateProduit()
  {
      this.produitService.updateProduit(this.selectedProduit).subscribe(
        res => {
          //Apres avoir modifier, on vide les champs et on return la nouvelle liste de produits
          this.initProduit();
          this.loadProduits();
        }
      );
  }

   //cette methode appelle deleteProduit() definie dans produit.service.ts ki a son tour appeler celle qui qui est dans le serveur
   deleteProduit()
   {
       this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
         res => {
           //Apres avoir supprimer, on vide les champs et on return la nouvelle liste de produits
           this.selectedProduit = new Produit();
           this.loadProduits();
         }
       );
   }


  //Recupere les données du produit a modifier pr le pre-afficher dans le frm d'update
  //Les données seront aff dans le html via la directive [(ngModel)]
  //Cette meth est appélée dans le ngOnInit()
  initProduit()
  {
    this.selectedProduit = new Produit();
    this.createForm();
  }

}
