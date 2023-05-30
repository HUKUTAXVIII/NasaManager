import { Component } from '@angular/core';
import { NasaApiService } from '../api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent {
    constructor(private nasaApiService: NasaApiService){}

    


}
