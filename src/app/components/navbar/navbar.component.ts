import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [FirebaseAuthService]
})
export class NavbarComponent implements OnInit {

  constructor(private FirebaseAuthService: FirebaseAuthService) {}

  ngOnInit() {
  }

}
