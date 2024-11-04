import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-skip4',
  templateUrl: './skip4.page.html',
  styleUrls: ['./skip4.page.scss'],
})
export class Skip4Page  {


  constructor(private navCtrl: NavController) {}

  
  goToSignIn() {
    this.navCtrl.navigateForward('/home'); }

}
