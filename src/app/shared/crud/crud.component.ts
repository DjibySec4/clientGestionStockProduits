import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

import { DataModel } from '../data.model';


//Toutes les components qui doivent avoir un crud vont herité de celui la
//(On la fé de maniere générique pr eviter de repeter le code du crud ds les composant).
//data c un tab d'elements

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
  title

  @Input()
  data : any

  @Input()
  service : CrudService;

  @Input()
  initItem : any;

  @Input()
  initForm : FormGroup;

  @Input()
  dataModelList : DataModel[]; //pr aff l'ente du tab et le contenu


  crudForm : FormGroup;

  operation : string = 'add';

  selectedItem : any;


  /**
   * produitMockService c'est pour les fausses données mis dans data.mock.services.ts
   * service c'est pour les vraies données de data.services.ts et dont les données proviennent du serveur
   * fb c'est pour la creation du frm
  */
  constructor(private fb : FormBuilder)
  {
      this.createForm();
  }

  ngOnInit(): void {
    this.init();
  }

  //On creer un frm
  createForm()
  {
    this.initForm ? this.crudForm = this.initForm : this.crudForm  = this.fb.group({});
  }

  loadDatas()
  {
    this.service.getAll().subscribe(
      data => {this.data = data},
      error => {console.log("Une erreur a été détécter lors des chargements des données du serveur ! ")},
      () => {console.log("Les données ont été chargés depuis le serveur avec success !")}
    );
  }

  add()
  {
      const p = this.crudForm.value;
      this.service.add(p).subscribe(
        res => {
          //Apres avoir ajouter, on vide les champs et on return la nouvelle liste de data
          this.init();
          this.loadDatas();
        }
      );
  }

  update()
  {
      this.service.update(this.selectedItem).subscribe(
        res => {
          //Apres avoir modifier, on vide les champs et on return la nouvelle liste de data
          this.init();
          this.loadDatas();
        }
      );
  }

   delete()
   {
       this.service.delete(this.selectedItem.id).subscribe(
         res => {
           //Apres avoir supprimer, on vide les champs et on return la nouvelle liste de data
           this.selectedItem = this.initItem;
           this.loadDatas();
         }
       );
   }


  //Recupere les données du produit a modifier pr le pre-afficher dans le frm d'update
  //Les données seront aff dans le html via la directive [(ngModel)]
  //Cette meth est appélée dans le ngOnInit()
  init()
  {
    this.selectedItem = this.initItem;
    this.createForm();
  }

}
