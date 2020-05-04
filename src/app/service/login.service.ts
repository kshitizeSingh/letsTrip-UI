import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {DataShareService} from './data-share.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor( private auth:AngularFireAuth , private dataShareService:DataShareService) { 
    this.auth.authState.subscribe(user=>{
      // this.LoggedUser=user
      console.log(user)
      dataShareService.setLoggedUser(user)
      localStorage.setItem('loggedUser',JSON.stringify(user))      
    },
    error=>{
      console.log(error)
    })
  }
  
  
  loginWithGoogle() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
