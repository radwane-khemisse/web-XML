import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  signup(user: { username: string; password: string; name: string }) {
    return this.http.post(this.apiUrl, user);
  }

  setAuth(state: boolean) {
    localStorage.setItem('isAuthenticated', state.toString());
  }

  getAuth(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout() {
    this.setAuth(false);
    this.router.navigate(['/login']);
  }
}
