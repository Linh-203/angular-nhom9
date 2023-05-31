import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  signUp() {
    const newUser = { ...this.signupForm.value }; // Assign unique id to user
    this.http
      .post<any>('http://localhost:3000/signUpUsers', newUser) // Send the user to the server
      .subscribe(
        (res) => {
          alert('Successfully signed up');
          this.http // Fetch the updated users from the server and set them to localStorage
            .get<any>('http://localhost:3000/signUpUsers')
            .subscribe((users) => {
              localStorage.setItem('signUpUsers:', JSON.stringify(users));
            });
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
}