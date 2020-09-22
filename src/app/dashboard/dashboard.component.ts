import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit/produit.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produitData = {
    labels: [],
    datasets: []
  };

  usersData= {
    labels: [],
    datasets: []
  };


  constructor(private produitService : ProduitService, private userService : UserService) { }

  ngOnInit() {

    // Produits
    const  datasetsQuantite = {
      label: "Quantite",
      data: [],
      backgroundColor : '#1ce',
      borderColor : 'orange'
    };

    const  datasetsPrixUnitaire = {
      label: "Prix Unitaire",
      data: [],
      backgroundColor : 'pink',
      borderColor : 'orange'
    };

    this.produitService.getAll().subscribe(list => list.forEach(produit => {
      this.produitData.labels.push(produit.ref);
      datasetsQuantite.data.push(produit.quantite);
      datasetsPrixUnitaire.data.push(produit.pu)
    }));

    this.produitData.datasets.push(datasetsQuantite);
    this.produitData.datasets.push(datasetsPrixUnitaire);


    // Utilisateur
    const  datasetsUser = {
      label: "Roles",
      data: [],
      backgroundColor : 'pink',
      borderColor : 'orange'
    };

    // this.usersData.labels.push("ROLE_ADMIN");
    // this.usersData.labels.push("ROLE_USER");

    this.userService.getAll().subscribe(list => list.forEach(user => {
      this.usersData.labels.push(user.username)
      datasetsUser.data.push(user.roles.length);
    }));

    this.usersData.datasets.push(datasetsUser);
  }

}
