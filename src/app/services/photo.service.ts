import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }
  

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  
  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!
      });

      return file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      
      return await this.convertBlobToBase64(blob) as string;
    }
  }

  public async loadSaved() {
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
  
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
    
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    console.log(base64Data);
    return base64Data;
  
    // const fileName = Date.now() + '.jpeg';
    // const savedFile = await Filesystem.writeFile({
    //   path: fileName,
    //   data: base64Data,
    //   directory: Directory.Data,
    // });

    

    // if (this.platform.is('hybrid')) {
    //   return {
    //     filepath: savedFile.uri,
    //     webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    //   };
    // } else {
    //   return {
    //     filepath: fileName,
    //     webviewPath: photo.webPath,
    //   };
    // }

  }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    
    return await this.readAsBase64(capturedPhoto)

    // const savedImageFile = await this.savePicture(capturedPhoto);
    // this.photos.unshift(savedImageFile);
  
    // Preferences.set({
    //   key: this.PHOTO_STORAGE,
    //   value: JSON.stringify(this.photos),
    // });
  }


  async openGallery() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100,
    })

    return await this.readAsBase64(image)
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
