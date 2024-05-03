import { Component, OnInit } from '@angular/core';
import { SuggestService } from '../services/suggest.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  signup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  isSidebarClosed = false;
  appName = 'Midway Travellers';
  name: any;
  pname: any;
  type: any;
  sidebarCollapsed: boolean = false;
  show: boolean = true;
  signupService: any;

  constructor(private suggestService: SuggestService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    console.log(localStorage.getItem("name"));


    this.suggestService.getplaceType()
      .subscribe(data => {
        for (const datum of data) {
          this.pname=datum[0]
          this.type=datum[1]
        }
      })

      
  }

  submitSignup() {
    console.log("signup awa")
    const name= this.signup.value.name;
    const email= this.signup.value.email;
    const password = this.signup.value.password;

    this.signupService.signup(name, email, password).subscribe(
      (response: any) => {
        // Handle the successful login response
        console.log(response);
        // Redirect or perform additional actions
      },
      (error: any) => {
        // Handle any error that occurs during login
        console.error(error);
        // Display error message or perform actions accordingly
      }
    );
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.isSidebarClosed = !this.isSidebarClosed;
    this.show = !this.show;
  }

  openLogoutConfirmation() {

  }
  

}
