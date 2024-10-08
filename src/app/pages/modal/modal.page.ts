import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonModal, IonButtons, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonItem, IonButtons, IonModal, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent],
  providers: [ModalController]
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { } //Inyectamos el modalController

  ngOnInit() {
  }


  async mostrarModal() {
    // Declaramos la función como 'async' para usar 'await' dentro de ella.

    const modal = await this.modalCtrl.create({
      // 'this.modalCtrl.create()' crea el modal, que es una ventana emergente.
      // 'await' espera a que el modal esté completamente creado antes de continuar.

      // Crear el modal con el componente hijo 'ModalInfoPage' y pasar los datos 'nombre' y 'pais'
      component: ModalInfoPage,
      // 'component' define qué página o componente se mostrará en el modal.
      // En este caso, 'ModalPage' es el componente que se visualizará.

      // Pasar información al modal hijo usando 'componentProps'
      componentProps: {
        nombre: 'Fernando',
        pais: 'España'
      },
      /*Con este componentProps, envío información al componente modal hijo, en este caso modal-info-page.ts que lo recibirá gracias a:
          @Input() nombre!: string;
          @Input() pais!: string;
      */


      cssClass: 'my-custom-class'
      // 'cssClass' permite añadir clases CSS personalizadas al modal para darle un estilo específico.
      // Aquí, se aplica la clase 'my-custom-class' al modal.
    });

    // Escuchar el evento 'onDidDismiss' para obtener los datos cuando el modal hijo se cierre
    modal.onDidDismiss().then((recibido) => {
      // Guardar los datos recibidos del modal en 'returnedData' para una mejor legibilidad
      const infoRecibida = recibido.data;
       // Verificar si se ha recibido algún dato del modal
      if (infoRecibida) {
        // Imprimir el valor de 'edad' enviado desde el modal hijo
        console.log('Edad recibida del modal:', infoRecibida.edad);
      }
    });

    console.log("Se pulsa mostrar");
    return await modal.present();
    // 'await modal.present()' espera a que el modal se muestre en la pantalla.
    // Retorna la promesa completada cuando el modal ya está visible.
  }

  /*no vamos a usar esta forma, aunque es la de la ayuda actual de Ionic
  @ViewChild(IonModal) modal!: IonModal;

  mensaje = 'Soy un mensaje';
  name = '';

  cancelar() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirmar() {
    this.modal.dismiss(null, 'confirmar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.mensaje = `Hello, ${ev.detail.data}!`;
    }
  }
    */

}
