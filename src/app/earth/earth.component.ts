import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent {
  date: any;
  lat: any;
  lon: any;
  imageData: any;

  constructor(private http: HttpClient,private authService: AuthService) { }

  searchImages() {
    const apiUrl = `https://api.nasa.gov/planetary/earth/imagery?date=${this.date}&lat=${this.lat}&lon=${this.lon}&api_key=${this.authService.getToken()}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      this.imageData = response.url;
      console.log(this.imageData);
    }, (error) => {
      console.log(error);
      this.imageData = error.url;
    });
  }
}
