import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent {
  date: any;
  imageData: any;

  constructor(private http: HttpClient,private authService: AuthService) { }

  searchImages() {
    const apiKey = this.authService.getToken(); 
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.date}&api_key=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      if (response.photos && response.photos.length > 0) {
        this.imageData = response.photos[0].img_src;
      } else {
        this.imageData = 'No image available';
      }
    }, (error) => {
      console.log(error);
    });
  }
}
