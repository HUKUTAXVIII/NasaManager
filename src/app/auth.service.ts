import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = '';

  getToken(): string {
    return this.tokenKey;
  }

  setToken(token: string): void {
    this.tokenKey = token;
  }

  removeToken(): void {
    this.tokenKey = '';
  }
}