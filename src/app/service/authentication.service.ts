import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/app';

import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: firebase.User;

  constructor(private fireAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user.providerData[0]));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  getUser(): Observable<UserModel> {
    const user = localStorage.getItem('user');
    const email = (JSON.parse(user) as firebase.User)?.email;
    return this.userService.getByEmail(email);
  }

  registerWithEmail(email: string, password: string, characterName: string): Observable<void> {
    const promise = this.fireAuth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      this.user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(this.user.providerData[0]));
      this.addUserOrUpdateUserLastLoginDate(userCredential, characterName);
      this.sendVerificationMail();
    });
    return from(promise);
  }

  sendVerificationMail(): Observable<void> {
    const promise = this.user.sendEmailVerification({
      url: `${environment.host}/login/email-verified/`,
    });
    return from(promise);
  }

  resetPassword(email: string): Observable<void> {
    return from(this.fireAuth.sendPasswordResetEmail(email));
  }

  loginWithEmail(email: string, password: string): Observable<void> {
    const promise = this.fireAuth.signInWithEmailAndPassword(email, password).then(userCredential => {
      this.user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(this.user.providerData[0]));
      this.addUserOrUpdateUserLastLoginDate(userCredential);
    });
    return from(promise);
  }

  loginWithGoogle(): Observable<void> {
    return this.loginWithProvider(new firebase.auth.GoogleAuthProvider());
  }

  loginWithProvider(provider: any): Observable<void> {
    const promise = this.fireAuth.signInWithPopup(provider).then(userCredential => {
      this.user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(this.user.providerData[0]));
      this.addUserOrUpdateUserLastLoginDate(userCredential);
    });
    return from(promise);
  }

  addUserOrUpdateUserLastLoginDate(userCredential: firebase.auth.UserCredential, characterName: string = null) {
    if (userCredential.additionalUserInfo.isNewUser) {
      const model = new UserModel();
      model.characterName = userCredential.user.displayName || characterName;
      model.email = userCredential.user.email;
      model.avatar = userCredential.user.photoURL;
      model.isEmailVerified = userCredential.user.emailVerified;
      model.lastLoginDate = new Date();
      this.userService.create(model);
    } else {
      this.userService.updateLastLoginDateByEmail(userCredential.user.email);
    }
  }

  logout(): Observable<void> {
    const promise = this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login/']);
    });
    return from(promise);
  }
}
