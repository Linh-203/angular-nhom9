import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
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
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers:', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
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
