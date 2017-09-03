import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {

  activeUser: any = false;
  errorMsg: string = '';

  constructor(public AngularFireAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.activeUser = user;
      else this.activeUser = false;
    });
  }

  // firebase

  createAccount(email: string, password: string) {
    this.AngularFireAuth.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      this.errorMsg = error.message;
    }).then(() => {
      this.login(email, password);
    });
  }

  login(email: string, password: string) {
    this.AngularFireAuth.auth.signInWithEmailAndPassword(email, password).catch((error) => {
      this.errorMsg = error.message;
    });
  }

  logout() {
    this.AngularFireAuth.auth.signOut().catch((error) => {
      this.errorMsg = error.message;
    });
  }
}
