import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  date: any;
  imageData: any;

  constructor(private http: HttpClient,private authService: AuthService) { }

  searchImages() {
    const apiKey = this.authService.getToken();
    const apiUrl = `https://api.nasa.gov/EPIC/api/natural/date/${this.date}?api_key=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      if (response.length > 0) {
        const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${this.date.replace('-', '/').replace('-', '/')}/png/${response[5].image}.png?api_key=${apiKey}`;
        this.imageData = imageUrl;
        console.log(imageUrl);
      } else {
        this.imageData = 'No image available';
      }
    }, (error) => {
      console.log(error);
    });
  }
}