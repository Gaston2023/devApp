
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Está seguro de que desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }
}
