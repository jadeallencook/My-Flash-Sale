import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  providers: []
})
export class AccountInfoComponent implements OnInit {

  // current user
  fullName: string = '';
  websiteUrl: string = '';
  shopAddress: string = '';
  shopZipcode: number = null;
  paypalId:string = '';

  // prices
  smallPrice: number = null;
  mediumPrice: number = null;
  largePrice: number = null;

  // build
  UID: string;
  accountInfo = {};
  successMsg: string;

  constructor(private FirebaseAuthService: FirebaseAuthService) {
    this.UID = FirebaseAuthService.activeUser.uid;
  }

  assignValues() {
    // get values from database
    firebase.database().ref('/artists/' + this.UID).on('value', (snapshot) => {
      let databaseValues = snapshot.val();
      // apply current user
      if (databaseValues.name) this.fullName = databaseValues.name;
      if (databaseValues.website) this.websiteUrl = databaseValues.website;
      if (databaseValues.address) this.shopAddress = databaseValues.address;
      if (databaseValues.zipcode) this.shopZipcode = databaseValues.zipcode;
      if (databaseValues.paypal) this.paypalId = databaseValues.paypal;
      // apply pricing
      if (databaseValues.prices) {
        if (databaseValues.prices.small) this.smallPrice = databaseValues.prices.small;
        if (databaseValues.prices.medium) this.mediumPrice = databaseValues.prices.medium;
        if (databaseValues.prices.large) this.largePrice = databaseValues.prices.large;
      }
    });
  }

  saveData() {
    // save data to firebase
    let userDatabaseRef = firebase.database().ref('/artists/' + this.UID);
    userDatabaseRef.on('value', (snapshot) => {
      let storeItems = snapshot.val().store;
      userDatabaseRef.set({
        name: this.fullName,
        website: this.websiteUrl,
        address: this.shopAddress,
        zipcode: this.shopZipcode,
        paypal: this.paypalId,
        prices: {
          small: this.smallPrice,
          medium: this.mediumPrice,
          large: this.largePrice
        },
        store: storeItems
      }).then(() => {
        this.successMsg = 'Your changes have been saved!';
        let turnOffMsg = setInterval(() => {
          this.successMsg = '';
          clearInterval(turnOffMsg);
        }, 2000);
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  ngOnInit() {
    // create user profile if it's not made
    let artistsRef = firebase.database().ref('/artists');
    artistsRef.once('value').then((snapshot) => {
      if (!snapshot.hasChild(this.UID)) {
        console.log('creating...');
        let newUserRef = firebase.database().ref('/artists/' + this.UID);
        newUserRef.set({
          name: '',
          address: '',
          zipcode: '',
          website: '',
          prices: {
            small: '',
            medium: '',
            large: ''
          }
        });
      }
    }).then(() => {
      this.assignValues();
    });
  }

}
