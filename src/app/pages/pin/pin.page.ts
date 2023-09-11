import { Component, OnInit } from '@angular/core';
// import { PincodeController } from  'ionic2-pincode-input/dist/pincode'
import { PincodeController } from 'ionic2-pincode-input';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  code:string;
  private handlePIN: (pincode: string) => Promise<any> = (pincode: string) => {
    console.log(this.code);
    return Promise.resolve();
  };

  constructor(
    public pincodeCtrl: PincodeController,
  ) { }

  ngOnInit() {
  }

  openPinCode():any{

    let pinCode =  this.pincodeCtrl.create({
      title:'Pincode',
      pinHandler: this.handlePIN
    });

    pinCode.present();

    // pinCode.onDidDismiss((code, status) => {})

  }
}


  