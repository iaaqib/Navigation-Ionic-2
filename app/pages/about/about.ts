import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
  }
goToContact(){

this.navCtrl.push(ContactPage)

}



}
