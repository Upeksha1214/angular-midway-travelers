import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {SignupService} from "../services/signup.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signupService : SignupService) { }

  ngOnInit(): void {
  }

  submitSignup() {
    console.log("signup awa")
    const name= this.signup.value.name;
    const email= this.signup.value.email;
    const password = this.signup.value.password;

    this.signupService.signup(name, email, password).subscribe(
      (response) => {
        // Handle the successful login response
        console.log(response);
        // Redirect or perform additional actions
      },
      (error) => {
        // Handle any error that occurs during login
        console.error(error);
        // Display error message or perform actions accordingly
      }
    );
  }

}
