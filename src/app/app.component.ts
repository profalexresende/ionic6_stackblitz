import { Component, VERSION } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ionic 6 Angular ' + VERSION.major;

constructor(public toast: ToastController){}


  async exibirToast() {
    const toast = await this.toast.create({
      message: 'Olá!!!!',
      duration: 2000,
      color:"danger"
    });
    toast.present();
  }

}
