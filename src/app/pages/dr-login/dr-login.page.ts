import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dr-login',
  templateUrl: './dr-login.page.html',
  styleUrls: ['./dr-login.page.scss'],
})
export class DrLoginPage implements OnInit {
  form : FormGroup;
  isLogin = false;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
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
    })
  }

  ngOnInit() {
  }

  onChange(){}
  
  onSubmit(){
    if(!this.form.valid) return;
    console.log(this.form.value);
  }
}
