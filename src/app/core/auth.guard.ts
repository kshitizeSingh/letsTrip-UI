import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {DataShareService} from '../service/data-share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth:AngularFireAuth, private dataShareService:DataShareService,private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.auth.authState.subscribe(user=>{
      if(user!=null){
        this.router.navigate(['/user'])
      } 
      else  {
        this.router.navigate(['/login'])
      }  
    },
    error=>{
      console.log(error)
    })
    return true;
  }
  
}
