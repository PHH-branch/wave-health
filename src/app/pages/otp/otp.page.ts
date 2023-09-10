import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  // form : FormGroup;
  opt: string;

  constructor() {
    // this.initForm();
  }

  // initForm() {
  //   this.form = new FormGroup({
  //     otp: new FormControl('',
  //     {validators: [Validators.required]}
  //     ),
  //   })
  // }

  ngOnInit() {
  }

  onOtpChange(event){
    this.opt = event;
  }

  onSubmit(){
    // if(!this.form.valid) return;
    // console.log(this.form.value);
    console.log(this.opt);
  }

}
