import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatMessages: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.chatMessages = this.db.list('chat');
  }

  getChatMessages() {
    return this.chatMessages.valueChanges();
  }

  sendMessage(message: string | Blob) {
    return this.chatMessages.push({ message });
  }  
}
