import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private angularAuth: AngularFireAuth, 
    public toast: ToastController) {
  }

  ionViewWillLoad(){
    this.angularAuth.authState.subscribe(res => {
      if(res && res.email){
        this.toast.create({
          message: `BemVindo ao APP_NAME, ${res.email}`,
          duration: 3000,
          position: 'center'
        }).present();
      }else{
        this.toast.create({
          message: `User Not Found...`,
          duration: 3000,
          position: 'center'
        }).present();
      }
      
    });
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }
}
