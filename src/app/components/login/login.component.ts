import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log('Login submitted:', this.credentials);
    // Goi API
  }
}
