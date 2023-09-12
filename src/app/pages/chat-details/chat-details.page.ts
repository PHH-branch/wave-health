import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {

  name: string = "Sender";
  message : string = '';
  isLoading = false;
  currentUserId = 1;
  // chat = [
  //   {id:1, sender:1 , message : "Hi"},
  //   {id:1, sender:2 , message : "Hello"},
  // ]
  chat: any[]=[];
  
  constructor(private chatService: ChatService) {
    this.chatService.getChatMessages().subscribe((messages) => {
      this.chat = messages;
    })
  }

  ngOnInit() {
    // this.chatService.getChatMessages().subscribe((messages) => {
    //   this.chat = messages;
    // })
  }
  sendMessage(){
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}

// export class ChatDetailsPage implements OnInit {

//   name: string = "Sender";
//   message : string;
//   isLoading = false;
//   currentUserId = 1;
//   chat = [
//     {id:1, sender:1 , message : "Hi"},
//     {id:1, sender:2 , message : "Hello"},
//   ]
//   constructor() { }

//   ngOnInit() {
//   }
//   sendMessage(){

//   }
// }
