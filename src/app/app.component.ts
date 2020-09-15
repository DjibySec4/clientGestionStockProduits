import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientGestionStockProduits';

  //Masque la sideBar par defaut
  showHideSideBar_app  : boolean = false;

  onShowSideBarChange(showHideSideBar)
  {
    this.showHideSideBar_app = showHideSideBar;
  }
}
