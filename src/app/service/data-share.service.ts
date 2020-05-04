import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  loggedUser
  constructor() { }
  getLoggedUser(){
    return this.loggedUser
  }
  setLoggedUser(user){
    this.loggedUser=user
  }


}
