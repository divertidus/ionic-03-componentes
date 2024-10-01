import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonLabel, IonToast, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ToastPage implements OnInit {
  mostrarToast() {
    throw new Error('Method not implemented.');
  }


  // Se inyecta el controlador para los ejemplos que lo necesitan
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  /* Metodo para los botones que usan el controlador de toast*/
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  /* Variable y método para el boton que verifica el estado y lo cambia desde el propio html*/
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  setRoleMessage(event: CustomEvent) {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  }

}
