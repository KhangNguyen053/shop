import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any;

  constructor(
    private auth: Auth,
    // public storeService: StoreService,
  ) {}

  async signin() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    console.log(credential);
    this.currentUser = credential.user;
  }

  async signout() {
    // for (let product of this.storeService.cart) {
    //   for (let product2 of this.storeService.products) {
    //     if ((product.id = product2.id)) {
    //       product2.quantity += product.quantity;
    //     }
    //   }
    // }
    await this.auth.signOut();
    this.currentUser = null;
  }
}
