import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from 'environments/environment'
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseAuthService } from './services/firebase-auth.service';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { BookComponent } from './pages/book/book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountStoreComponent } from './components/account-store/account-store.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'book', component: BookComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ArtistComponent,
    BookComponent,
    NavbarComponent,
    AccountInfoComponent,
    AccountStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebaseConfig)
  }
}
