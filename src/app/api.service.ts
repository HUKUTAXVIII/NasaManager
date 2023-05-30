import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiUrl = 'https://api.nasa.gov';
  private apiKey = '';

  constructor(private http: HttpClient) {}

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }
  removeApiKey(): void {
    this.apiKey = '';
  }

  verifyApiKey(): Promise<boolean> {
    const url = `${this.apiUrl}/planetary/apod?api_key=${this.apiKey}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, { headers })
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

  apod(date:any): Promise<boolean> {
    const url = `${this.apiUrl}/planetary/apod?api_key=${this.apiKey}&date=${date}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, { headers })
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

}