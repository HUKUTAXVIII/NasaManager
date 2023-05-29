import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NasaManager';
  category = '';
  AuthUser(option:string){
    console.log(option);
    return false;
  }
  onChanged(category:any){
      this.category = category;
  }

}
