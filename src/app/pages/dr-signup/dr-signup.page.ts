import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dr-signup',
  templateUrl: './dr-signup.page.html',
  styleUrls: ['./dr-signup.page.scss'],
})
export class DrSignupPage implements OnInit {
  signupForm :FormGroup;
  isTypePassword :boolean = true;
  isLoading :boolean = false;

  constructor() {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm(){
    this.signupForm = new FormGroup({
      username: new FormControl('',
      {validators: [Validators.required]}
      ),
      email: new FormControl('',
      {validators: [Validators.required, Validators.email]}
      ),
      phone: new FormControl('',
      {validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]}
      ),
      sama: new FormControl('',
      {validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]}
      ),
      dob: new FormControl('',
      {validators: [Validators.required]}
      ),
      nrc: new FormControl('',
      {validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]}
      ),
      speciality: new FormControl('',
      {validators: [Validators.required]}
      ),
    })
  }

  onChange(){
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit(){
    if(!this.signupForm.valid) return;
    console.log(this.signupForm.value);
  }
}
