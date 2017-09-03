import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable()
export class DashboardStoreService {

  firebaseStoreDirectory:string = '';

  addToStore(size, imgUrl, title) {

  }

  constructor(private FirebaseAuthService: FirebaseAuthService) {

  }

}
