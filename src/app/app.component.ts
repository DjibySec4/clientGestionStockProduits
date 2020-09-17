import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'clientGestionStockProduits';

  //Masque la sideBar par defaut
  showHideSideBar_app  : boolean = false;

  constructor(private appService : AppService, private router : Router)
  {
  }

  ngOnInit() {
    //Si user n'est pas authentifier, on le redirige vers la page login
    if(!this.appService.authenticated)
    {
        this.router.navigateByUrl("/login")
    }
    else
    {
      this.router.navigateByUrl("/home")
    }
  }

  onShowSideBarChange(showHideSideBar)
  {
    this.showHideSideBar_app = showHideSideBar;
  }
}
