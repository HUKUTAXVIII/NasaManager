import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NasaApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NasaManager';
  category = '';
  errMsg='';

  constructor(private authService: AuthService,private nasaApiService: NasaApiService) { }

  AuthUser(key:string){

    this.nasaApiService.setApiKey(key);
    this.nasaApiService.verifyApiKey()
    .then((isValid) => {
      if(isValid){
        this.authService.setToken(key);
        this.category = 'apod';
        this.errMsg='';
      }else{
        this.errMsg = '*Incorrect Key';
      }
      })
      .catch((error) => {
        this.nasaApiService.removeApiKey();
        console.error('Ошибка при проверке ключа API:', error);
      });
      
    
    return false;
  }

  onChanged(category:any){
      this.category = category;
  }
  getToken(): string {
    return this.authService.getToken();
  }

}
