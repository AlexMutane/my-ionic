import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    user = {} as User;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private angularAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    try{
      const result = await this.angularAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.push(LoginPage);
      }else{
        //do something
      }
    }catch(e){
      console.error(e);
    }
  }
}
