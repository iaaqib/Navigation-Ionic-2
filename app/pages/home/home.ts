import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';


@Component({
  templateUrl: 'build/pages/home/home.html'

})
export class HomePage {
  private nav : NavController;
  constructor(private navCtrl: NavController) {
    
  this.nav = navCtrl
  }

 goToAbout() {
  this.navCtrl.push(AboutPage)
}



}
