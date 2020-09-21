import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../shared/data.model';
import { Produit } from '../shared/produit.model';

import {ProduitService} from './produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Produit[];

  produitForm : FormGroup;

  produit : Produit = new Produit();

  produitsModel : DataModel[];

  constructor(public produitService : ProduitService, private fb : FormBuilder,
     private route : ActivatedRoute)
  {
  }

  ngOnInit(): void {
    this.produits = this.route.snapshot.data.produits;
    this.produitForm = this.fb.group({
      ref : ["", Validators.required],
      quantite : '',
      pu : '',
    });

    this.produitsModel = [
        new DataModel('id','ID','number',true,[]),
        new DataModel('ref','référence','string',false,[]),
        new DataModel('quantite','Quantité','number',false,[]),
        new DataModel('pu','Prix unitaire','number',false,[]),
    ];
  }



}
