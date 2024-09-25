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

// PRIMERA ALERTA, se "bindea" con el html usando los nombres de las propiedades entre corchetes, es raro pero es asi. 
// Para otra alerta usaría otros nombres.
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

  //SEGUNDA ALERTA -> Se "bindea" con el HTML por el nombre del metodo presentSecondAlert, 
  //alli hago: <ion-button (click)="presentSecondAlert()">Alerta 2</ion-button> Esta manera me parece mejor realmente.....

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

  //TERCERA ALERTA, con inputs ( formualario)

  async terceraAlerta() {
    const alert = await this.alertController.create({

      header: 'Alerta con Formulario',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 12,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'url',
          type: 'url',
          value: 'http://google.com',
          placeholder: 'tu web'
        },
        {
          name: 'fecha',
          type: 'date',
          min: '1910-01-01',
          max: '2024-09-25',

        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [
        {

          text: 'ok',
          //Para recibir la informacion del formulario, puedo verlo con la consola del navegador abierta
          handler: (data: any) => {
            console.log('Se pulsa OK'),
              console.log(data);

            // Aquí puedes usar los valores de data
            const userName = data.name; // Accediendo al valor del campo 'name'
            const userNickname = data.nickname; // Accediendo al campo 'nickname'
            const userAge = data.age; // Accediendo al campo 'age'
            const userUrl = data.url; // Accediendo al campo 'url'
            const userDate = data.fecha; // Accediendo al campo 'fecha'
            const userDescription = data.description; // Accediendo al campo 'description'

            // Muestra los valores por consola o haz algo con ellos
            console.log('Nombre:', userName);
            console.log('Apodo:', userNickname);
            console.log('Edad:', userAge);
            console.log('URL:', userUrl);
            console.log('Fecha de nacimiento:', userDate);
            console.log('Descripción:', userDescription);



          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Se pulso cancelar");
          }
        }
      ]

    })
    await alert.present();
  }


  ngOnInit() {
  }



}
