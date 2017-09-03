import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from '../../services/dashboard-store.service'
import { FirebaseAuthService } from '../../services/firebase-auth.service'
import * as firebase from 'firebase';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-account-store',
  templateUrl: './account-store.component.html',
  styleUrls: ['./account-store.component.scss'],
  providers: [DashboardStoreService]
})
export class AccountStoreComponent implements OnInit {

  title: string = '';
  size: string = 'small';
  image:any;
  storeItemsArray = [];

  addToStore() {
    this.DashboardStoreService.addToStore(document.getElementById('flash-image'), this.title, this.size);
  }

  sanatizeBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  deleteItem(key) {
    let itemRef = firebase.database().ref('/artists/' + this.FirebaseAuthService.activeUser.uid + '/store/' + key);
    itemRef.on('value', (snapshot) => {
      let itemImage = snapshot.val().image;
      let imageRef = firebase.storage().ref(this.FirebaseAuthService.activeUser.uid + '/' + itemImage);
      imageRef.delete().then(() => {
        itemRef.remove();
      });
    });
  }

  constructor(private DashboardStoreService: DashboardStoreService, private FirebaseAuthService: FirebaseAuthService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    // cache firebase storeage
    let firebaseStorageRef = firebase.storage();
    // make sure image is < 3mb
    document.getElementById('flash-image').addEventListener('change', () => {
      let imageSize = (<HTMLInputElement>document.getElementById('flash-image')).files[0].size;
      let uploadBtn = document.getElementById('upload-btn');
      if (imageSize < 3145728) {
        document.getElementById('flash-image-tag').innerText = 'Ready!';
        uploadBtn.classList.remove('btn-danger');
        uploadBtn.classList.add('btn-default');
      } else {
        uploadBtn.classList.remove('btn-default');
        uploadBtn.classList.add('btn-danger');
        document.getElementById('flash-image-tag').innerText = 'Too Big (Choose Another)';
      }
    });
    // get store images from firebase db
    firebase.database().ref('/artists/' + this.FirebaseAuthService.activeUser.uid).on('value', (snapshot) => {
      // restart array for snapshot
      this.storeItemsArray = [];
      // cache store items from snapshot
      let storeItems = snapshot.val().store;
      if (storeItems) {
        let keys = Object.keys(snapshot.val().store);
        for (let i = 0, max = keys.length; i < max; i++) {
          // get image url for each item
          firebaseStorageRef.ref(this.FirebaseAuthService.activeUser.uid + '/' + storeItems[keys[i]].image).getDownloadURL().then((url) => {
            // push item to array
            let imageRef = url;
            storeItems[keys[i]].image = imageRef;
            storeItems[keys[i]].key = keys[i];
            this.storeItemsArray.push(storeItems[keys[i]]);
          });
        }
      }
    });
  }

}
