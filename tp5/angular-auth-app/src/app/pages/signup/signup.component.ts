import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  name = '';
  password = '';
  error = '';

  constructor(private auth: AuthService) {}

  onSignup() {
    if (!this.username || !this.name || !this.password) {
      this.error = 'All fields are required';
      return;
    }

    this.auth.signup({ username: this.username, name: this.name, password: this.password })
      .subscribe(() => {
        this.auth.setAuth(true);
        window.location.href = '/dashboard';
      }, () => {
        this.error = 'Signup failed. Try again.';
      });
  }
}
