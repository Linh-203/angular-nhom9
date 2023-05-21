import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signupUsers: any[] = [];
  loginObj: any = {
    email: '',
    password: '',
  };
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers:');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onLogin() {
    const userExist = this.signupUsers.find(
      (e) =>
        e.email == this.loginObj.email && e.password == this.loginObj.password
    );
    if (userExist) {
      alert('Login successfully');
    } else {
      alert('Login failed, wrong email or password');
    }
  }
}
