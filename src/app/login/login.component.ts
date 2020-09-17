import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  credentials = {
    username : '',
    password : ''
  };

  constructor(private fb : FormBuilder, private appService : AppService, private router : Router) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
          username : [null, Validators.compose([Validators.required, Validators.min(3)])],
          password : [null, Validators.compose([Validators.required, Validators.min(3)])]
      });
  }

  //Si user est auth, on lui redirige vers la liste des produits
  login()
  {
      this.appService.authenticate(this.credentials, ()=>{
          this.router.navigateByUrl("/home/(contentOutlet:produit)");
      });
  }


}
