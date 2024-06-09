import { Component, OnInit, ViewChild } from '@angular/core';

import { AddUserDetails } from '../userDetails-request.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserDetails } from '../userDetails-model';
import { UserDetailsService } from '../user-details.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userId = 0;
  userName = '';
  email = '';
  password = '';
  isAdmin : boolean = false;
  createdDate!: string;
  lastUpdatedDate = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  @ViewChild('form', { static: true })
  form!: NgForm;
  usernameTaken = false;
  alertMessage = '';
  constructor(private router: Router, private userDetailsService: UserDetailsService) {
  }
  ngOnInit(): void {
  }
  onFormSubmit(): void {
    if (true) {
      console.log("in ts")
      this.userDetailsService.adduserDetails(this.userId, this.userName, this.email, this.password, this.isAdmin).subscribe(
        (_response) => {
          this.alertMessage = "Registration successfull";
          this.isSuccess = true;
          this.isError = false;
          this.router.navigate(['/login'])
        },
        (error) => {
          this.alertMessage = 'server error.';
          this.isSuccess = false;
          this.isError = true;
        });
    }
  }
}