import { ModalPageComponent } from './../modal-page/modal-page.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.presentModal();

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }
}
