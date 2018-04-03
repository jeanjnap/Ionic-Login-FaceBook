import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDate:any = null;

  constructor(
    public navCtrl: NavController,
    private facebook: Facebook
  ) {

  }

  Login() {
    this.facebook.login(['email', 'public_profile']).then((response) => {
      this.facebook.api('me?fields=picture.type(large),name,email',[]).then((profile) => { 
        this.userDate = {
          name: profile['name'],
          email: profile['email'],
          id: profile['id'],
          picture: profile['picture']['data']['url']
        };
        //alert(`Nome: ${profile['name']}\nEmail: ${profile['email']}\nId: ${profile['id']}\nFoto: ${profile['picture']['data']['url']}`);
      })
    })
  }


}
