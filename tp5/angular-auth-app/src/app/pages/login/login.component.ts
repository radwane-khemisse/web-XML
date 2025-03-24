
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe(users => {
      if (users.length > 0) {
        this.auth.setAuth(true);
        window.location.href = '/dashboard';
      } else {
        this.error = 'Invalid credentials';
      }
    });
  }
}