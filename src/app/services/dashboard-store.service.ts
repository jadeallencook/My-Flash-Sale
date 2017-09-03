import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable()
export class DashboardStoreService {

  fileName: string = '';
  uploadProgress: number = 0;
  firebaseStoreDirectory: string = '';
  uploading: boolean = false;
  success: boolean = false;

  addToStore(image, title, size) {
    // push image to firebase storage
    let imageSize:number;
    if (image.files[0]) imageSize = (<HTMLInputElement>document.getElementById('flash-image')).files[0].size;
    else imageSize = 0;
    if (image.files[0] && title && imageSize < 3145728) {
      document.getElementById('upload-form').style.display = 'none';
      this.uploading = true;
      image = image.files[0];
      let date = new Date();
      this.fileName = date.getMonth() + date.getDay() + date.getFullYear() + date.getTime() + '.' + image.name.split('.').pop();;
      let storageRef: any = firebase.storage().ref(this.FirebaseAuthService.activeUser.uid + '/' + this.fileName);
      storageRef.put(image).on('state_changed', (snapshot: any) => {
        this.uploadProgress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, (error) => {
        console.log(error);
      }, () => {
        this.uploading = false;
        this.success = true;
        // success, now add item to firebase db
        firebase.database().ref('artists/' + this.FirebaseAuthService.activeUser.uid + '/store').push({
          title: title,
          image: this.fileName,
          size: size
        });
      });
    } else {
      if (!title) document.getElementById('flash-title').style.border = 'solid thin red';
      else document.getElementById('flash-title').style.border = 'solid thin #ccc';
      let uploadBtn = document.getElementById('upload-btn');
      if (!image.files[0] && imageSize < 3145728) {
        uploadBtn.classList.remove('btn-default');
        uploadBtn.classList.add('btn-warning');
        document.getElementById('flash-image-tag').innerText = 'Umm, image?';
      } else if (imageSize > 3145728) {
        uploadBtn.classList.remove('btn-default');
        uploadBtn.classList.add('btn-danger');
        document.getElementById('flash-image-tag').innerText = 'Too Big (Choose Another)';
      }
    }
  }

  constructor(private FirebaseAuthService: FirebaseAuthService) {

  }

}
