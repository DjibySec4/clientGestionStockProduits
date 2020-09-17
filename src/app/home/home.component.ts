import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

   //Masque la sideBar par defaut
   showHideSideBar_app  : boolean = false;

   constructor(private appService : AppService, private router : Router)
   {
   }


   onShowSideBarChange(showHideSideBar)
   {
     this.showHideSideBar_app = showHideSideBar;
   }
}
