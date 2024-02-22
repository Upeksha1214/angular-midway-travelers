import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServiceService } from "../services/login-service.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  knightRiderText: string = '';
  textToAnimate: string = 'Welcome to Investigate the World!!!!';
  currentIndex: number = 0;

  constructor(private router: Router, private loginService: LoginServiceService) { }

  signup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.animateKnightRiderText();
  }

  goToDashPage() {
    this.submitLogin();
  }

  submitLogin() {
    console.log("login awa")
    const nameValue = this.signup.get('name')?.value ?? '';
    const password = this.signup.value.password;

    this.loginService.login(this.signup.value.name, this.signup.value.password).subscribe(
      (response) => {
        if (response == "Authentication failed") {
          console.log("fail")
        } else {
          localStorage.setItem("name", nameValue)
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  animateKnightRiderText() {
    const animationInterval = setInterval(() => {
      this.knightRiderText += this.textToAnimate[this.currentIndex];
      this.currentIndex++;

      if (this.currentIndex >= this.textToAnimate.length) {
        clearInterval(animationInterval);
        this.resetAnimation();
        this.animateKnightRiderText();
      }
    }, 200);
  }

  resetAnimation() {
    this.knightRiderText = '';
    this.currentIndex = 0;
  }

}
