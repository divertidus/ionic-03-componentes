import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonAlert, IonButton, HeaderComponent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  // Configuración de la primera alerta 
  alertBackdropDismiss = true;
  alertHeader = 'Titulo del alert';
  alertSubHeader = 'Subtítulo del alert';
  alertMessage = 'Mensaje a mostrar, soy un alert';
  alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Confirmado');
      }
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Cancelado');
      }
    }
  ];


  //Esto es para la segunda alerta
  constructor(private alertController: AlertController) { }
  // Método para la segunda alerta programática
  async presentSecondAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta programada',
      subHeader: 'Segunda alerta',
      message: 'Este es otro tipo de alerta programada',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Alerta programada aceptada');
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Alerta programada cerrada');
          }
        }
      ]
    });

    // Muestra la alerta programada
    await alert.present();
  }
  ngOnInit() {
  }

}
