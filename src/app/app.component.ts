import { Component } from '@angular/core';
import {LoginService} from './service/login.service';
import {DataShareService} from './service/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:LoginService,private dataShareService:DataShareService ){}
  title = 'letsTrip';
  login(){
    this.auth.loginWithGoogle()
  }

  logout(){
    this.auth.logout()
  }

  
}
