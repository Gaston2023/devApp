
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  private readonly existingUser = 'gaston2023';
  username: any;
  password: any;
  email: any;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async register() {
    if (this.registerForm.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor complete todos los campos correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const { username, password, email } = this.registerForm.value;

    if (username === this.existingUser) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La cuenta ya existe. Debe iniciar sesión.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Registro exitoso.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/login']);
    }
  }
}

