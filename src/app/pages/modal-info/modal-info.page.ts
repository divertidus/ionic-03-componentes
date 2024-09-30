import { Component, Input, input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonInput } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [ModalController]
})
export class ModalInfoPage implements OnInit {




  //Hago una variable para acceder desde el HTML, de ese modo puedo tando guardar el dato como gestionar el boton
  /*
  Explicación:
[(ngModel)]="edad": Vincula el valor del input a la variable edad en el componente.
[disabled]="!edad": El botón estará deshabilitado (disabled) mientras la variable edad esté vacía o indefinida.
Con esto, el botón solo estará habilitado si hay contenido en el campo de entrada.
  */
  edad!: number;


  /* Con estos Input recibo información del componente padre, en este caso modal.page.ts en concreto lo establecido como 

        componentProps: {
              nombre: 'Fernando',
              pais: 'España'
            }
      Se usará en el html con {{nombre}} y {{pais}}
  ,*/
  @Input() nombre!: string;
  @Input() pais!: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModalSinMas() {
    this.modalCtrl.dismiss();
    console.log("Cerrar sin más")
  }

  // Cerrar el modal y pasar el valor de 'edad' al componente padre
  cerrarConArgumentos(arg0: number) {
    this.modalCtrl.dismiss({
      edad: arg0
    });
    console.log("Modal cerrado enviando edad:", arg0);
  }





}
