import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
credentials = {
    username: '',
    password: '',
    repassword: '',
  };

  onSubmit() {
    console.log('Register submitted:', this.credentials);
    // Goi API
  }
}
