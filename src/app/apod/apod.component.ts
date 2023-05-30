import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent {
    selectedDate:any;
    image = '';
    title = '';
    explanation='';

    constructor(private authService: AuthService,private http: HttpClient){}
    

    getFromApi(): void {
      
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.authService.getToken()}&date=${this.selectedDate}`;
  
      this.http.get(apiUrl).subscribe((data: any) => {
        console.log(data); 
        this.image = data.hdurl;
        this.title = data.title;
        this.explanation=data.explanation;
      }, (error) => {
        console.log(error); 
      });
    }


}
