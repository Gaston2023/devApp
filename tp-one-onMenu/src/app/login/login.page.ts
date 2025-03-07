
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Nombre de usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

