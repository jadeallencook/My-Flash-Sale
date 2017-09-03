import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from '../../services/firebase-auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FirebaseAuthService]
})

export class HomeComponent implements OnInit {

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
    environment.page = 'home';
  }

}
