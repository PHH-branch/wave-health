import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-v2',
  templateUrl: './pin-v2.page.html',
  styleUrls: ['./pin-v2.page.scss'],
})
export class PinV2Page implements OnInit {
  code: string
  codeLength
  isLoading: boolean = false

  constructor() { 
    this.code = ''
    this.codeLength = 4
  }

  ngOnInit() {
  }

  onCodeChanged(code: string) {
      this.code = code
  }

  onCodeCompleted(code: string) {
    this.isLoading = true
    console.log(code);
    
  }

  onKey(key: string) {
    this.code += key
    if (this.code.length == this.codeLength){
      this.onCodeCompleted(this.code)
    }
  }

  onDelete() {
    this.code = this.code.substring(0, this.code.length-1)
  }
}
