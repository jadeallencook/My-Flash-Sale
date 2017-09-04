import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [FirebaseAuthService]
})
export class ArtistComponent implements OnInit {

  name: string = '';
  address: string = '';
  zipcode: string = '';
  paypal: string = '';
  website: string = '';
  items: Array<Object> = [];
  prices;

  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer, private FirebaseAuthService: FirebaseAuthService) { }

  sanatizeBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  ngOnInit() {
    // set user info from firebase
    this.route.params.subscribe(params => {
      let userId = params.id;
      firebase.database().ref('/artists/' + userId).once('value').then(snapshot => {
        let user = snapshot.val();
        if (user.name) this.name = user.name;
        else this.name = 'No Name Set!';
        if (user.address) this.address = user.address;
        if (user.zipcode) this.zipcode = user.zipcode;
        else this.zipcode = 'No Zipcode Set!';
        if (user.website) this.website = user.website;
        if (user.prices) this.prices = user.prices;
        if (user.paypal) this.paypal = user.paypal;
        // setup the store
        if (user.store) {
          let storeItems = user.store;
          if (storeItems) {
            let keys = Object.keys(snapshot.val().store);
            for (let i = 0, max = keys.length; i < max; i++) {
              // get image url for each item
              let firebaseStorageRef = firebase.storage();
              firebaseStorageRef.ref(userId + '/' + storeItems[keys[i]].image).getDownloadURL().then((url) => {
                // push item to array
                let imageRef = url;
                storeItems[keys[i]].image = imageRef;
                storeItems[keys[i]].key = keys[i];
                this.items.push(storeItems[keys[i]]);
              });
            }
          }
        }
      }).catch(error => {
        console.log(error);
      });
    });

  }

}
