
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  name!: string;
  surname!: string;
  email!: string;
  profilePic!: string | ArrayBuffer | unknown;

  constructor(private alertController: AlertController) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profilePic = reader.result;
    };
    reader.readAsDataURL(file);
  }

  async saveProfile() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Perfil actualizado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}

