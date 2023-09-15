import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActionSheetController, IonContent } from '@ionic/angular';
import { ChatService } from 'src/app/chat.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  name: string = "Sender";
  message: string | Blob;
  isLoading = false;
  currentUserId = 1;
  // chat = [
  //   {id:1, sender:1 , message : "Hi"},
  //   {id:1, sender:2 , message : "Hello"},
  // ]
  chat: any[]=[];
  
  constructor(private chatService: ChatService,public photoService: PhotoService, private actionSheetCtrl: ActionSheetController) {}
  
  ngOnInit() {
    this.chatService.getChatMessages().subscribe((messages) => {
      this.chat = messages;
      setTimeout(_ => {
        this.content.scrollToPoint(0, 9999999, 100)
      }, 300)
    })
  }

  // async connect() {
  //   const response = await window.WaveJsSDK.locationModule.getCurrentPosition();
  //   response.then(data => {
  //     console.log(data);
      
  //   })
  // }

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then(b64 => {
      this.message=b64;
      this.sendMessage();
    });
  }

  openGallery() {
    this.photoService.openGallery().then(b64 => {
      this.message=b64;
      this.sendMessage();
    })
  }

  onEnterPressed(event: any) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  sendMessage(){
    if (typeof(this.message) == 'string') {
      this.message = this.message.trim()
    }
    this.chatService.sendMessage(this.message)
    .then(_ => this.content.scrollToBottom(100));
    this.message = '';
  }

  async presentActionSheet() {
    // interface ActionSheetButton<T = any> {
    //   text?: string;
    //   role?: 'cancel' | 'destructive' | 'selected' | string;
    //   icon?: string;
    //   cssClass?: string | string[];
    //   id?: string;
    //   htmlAttributes?: { [key: string]: any };
    //   handler?: () => boolean | void | Promise<boolean | void>;
    //   data?: T;
    // }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'More',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.addPhotoToGallery();
          },
        },
        {
          text: 'Gallery',
          handler: () => {
              this.openGallery();
          },
        },
        // {
        //   text: 'Connect',
        //   handler: () => {
        //       this.connect();
        //   },
        // },
        {
          text: 'Cancel',
          role: 'Cancel',
        }
      ]
    });

    await actionSheet.present();
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
