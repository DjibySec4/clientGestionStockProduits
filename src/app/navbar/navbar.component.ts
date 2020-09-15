import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Permet de recupere la var showHideSideBar du pere (app.component.ts) l'initialisation est faites ds le .htmll du pere
  @Input()
  showSideBar_navbar : boolean;

  //Il faut tjs le mettre comme ca
  @Output()
  showSideBarChange_navbar : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  afficherSideBar()
  {
    //On affiche ou masque le sideBar
      this.showSideBar_navbar = !this.showSideBar_navbar;
      //On prapage le changement aux 2 composants (pere => app et fils => navbar) d'ou le @Output
      this.showSideBarChange_navbar.emit(this.showSideBar_navbar);
  }

}
