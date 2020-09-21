import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Principal } from '../shared/principal.model';
import { PrincipalState } from '../shared/principal.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private principal : Principal;

  constructor(private store : Store<PrincipalState>) { }

  ngOnInit(): void {
    this.store.select('principal').subscribe(principal =>{
      console.log(principal);
      this.principal = principal;
    });
  }


  //C ces 2 meth kon va user dans le html (sidebar pr limiter l'acces)
  hasRoleUser()
  {
    let hasRole : boolean = false;
    this.principal.authorities.forEach(item => {
      if(item.authority === 'ROLE_USER')
      {
          hasRole = true;
      }
    });
    return hasRole;
  }

  hasRoleAdmin()
  {
    let hasRole : boolean = false;
    this.principal.authorities.forEach(item => {
      if(item.authority === 'ROLE_ADMIN')
      {
          hasRole = true;
      }
    });
    return hasRole;
  }
}
