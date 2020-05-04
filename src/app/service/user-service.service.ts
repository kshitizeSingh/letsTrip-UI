import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user
  constructor(private db: AngularFirestore) { 

  }

  getUserById(id){
    return this.db.doc<any>("users/"+id).valueChanges()
  }

  updateUser(id,user){
    return this.db.doc<any>("users/"+id).update(user)
  }

  addUserInCollection(user){
    return this.db.collection("users").add(user);
  }

}
