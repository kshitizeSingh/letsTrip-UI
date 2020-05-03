import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyDGIrwQRhGGsQLCwoSYbtwwS8X5NFZfrTM",
  authDomain: "letstrip-22241.firebaseapp.com",
  databaseURL: "https://letstrip-22241.firebaseio.com",
  projectId: "letstrip-22241",
  storageBucket: "letstrip-22241.appspot.com",
  messagingSenderId: "13380952499",
  appId: "1:13380952499:web:d54010e89d7c1e2bc1abc6",
  measurementId: "G-YEFV334CE2"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
