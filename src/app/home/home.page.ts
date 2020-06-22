import { GetListComponent } from './../get-list/get-list.component';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/services/db.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  public  itemListData = [];

  constructor(
              private loadingController: LoadingController) {
  }
  ngOnInit() {
    this.presentLoading();
     }




  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor, 4000 datos cargando...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



}
