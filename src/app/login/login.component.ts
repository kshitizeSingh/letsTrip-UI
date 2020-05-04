import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {DataShareService} from '../service/data-share.service';
import {UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:LoginService,private dataShareService:DataShareService, private userService:UserServiceService ){}
  ngOnInit() {
  }
 
  login(){
    this.auth.loginWithGoogle()
  }

  logout(){
    this.auth.logout()
  }

  getUserById(id){
    	this.userService.getUserById(id).subscribe(user=>{
        console.log(user)
      },error=>{
        console.log(error)
      })
  }

  

}
