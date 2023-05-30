import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent {
  startDate: any;
  endDate: any;
  asteroidsData: any[] = [];

  constructor(private http: HttpClient,private authService: AuthService) { }

  searchAsteroids() {
    const apiKey = this.authService.getToken(); // Замените на ваш API-ключ от NASA
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.endDate}&api_key=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      if (response && response.near_earth_objects) {
        var mapData: any[] = [];

        Object.keys(response.near_earth_objects).forEach(function(key, index) {
          for(let i =0; i<response.near_earth_objects[key].length;i++){
            console.log(response.near_earth_objects[key][i].name);
            console.log(response.near_earth_objects[key][i].close_approach_data[0].close_approach_date);
            mapData.push({
              name:response.near_earth_objects[key][i].name,
              near_earth_objects:response.near_earth_objects[key][i].close_approach_data[0].close_approach_date,
            });
          }
          
        });
        
        this.asteroidsData = mapData;
        console.log(this.asteroidsData);
      } else {
        this.asteroidsData = [];
      }
    }, (error) => {
      console.log(error);
    });
  }
}
