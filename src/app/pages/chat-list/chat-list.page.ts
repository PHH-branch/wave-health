import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  msgList = [
    {id:1, name:"Ma May", photo:"",msg:"I am Fine."},
    {id:2, name:"Htet Myat", photo:"",msg:"I am Ok."},
    {id:3, name:"Min Nyo", photo:"",msg:"I am the way to home."},
    {id:4, name:"Tin NanDar", photo:"",msg:"ha ha."},
    {id:5, name:"Dr Aung Min Oo", photo:"",msg:"Hello"},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  getChat(item:any){
   // this.router.navigate(['/','chat-list','chat-details',item]);
    this. router.navigate(
      ['/chat-details'], {queryParams: item,queryParamsHandling:"preserve"}
      );
  }

}
