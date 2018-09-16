import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import 'rxjs/operators';
import 'rxjs/add/operator/map'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth:AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  //registro con email
  signup(email:string, password:string){
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  //login con email
  login(email:string, password:string){
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  //cerrar sesion
  logout(){
    return this.firebaseAuth.auth.signOut()
  }

  //verificador de estado del usuario
  getAuth(){
    return this.firebaseAuth.authState.map(auth =>auth);
  }

  //login google
  googleLogin(){
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  //login facecook
  facebookLogin(){
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
}

