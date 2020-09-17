import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from './config/api.url.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppService {

  authenticated : boolean = false;

  constructor(private http : HttpClient, private cookieService : CookieService) { }


  authenticate(credentials, callback)
  {
      if(credentials)
      {
        const token = btoa(credentials.username + ':' + credentials.password);
        this.cookieService.set("token", token);
   
         this.http.get(API_URLS.USER_URLS).subscribe(response => {
            if(response && response["name"])
            {
              this.cookieService.set("token", token);
              this.authenticated = true;
            }
            else
            {
              this.authenticated = false;
            }
            return callback && callback();
         });
      }
      else
      {
        this.authenticated = false; 
      }
  }


  logout(callback)
  {
     return callback && callback();
  }





  //Ds l'objet credentials, il ya le username et le login et callback c'est le traitement a faire apres l'envoi
  //de la requete au serveur. Ds cette meth on use des mock datas (un user et login ki n'existe pa ds la BD)
  // authenticate(credentials, callback)
  // {
  //     if(credentials && credentials.username == 'user' && credentials.password == 'password1')
  //     {
  //         this.authenticated = true;
  //     }
  //     else
  //     {
  //         this.authenticated = false;
  //     }
  //     return callback && callback();
  // }
}
