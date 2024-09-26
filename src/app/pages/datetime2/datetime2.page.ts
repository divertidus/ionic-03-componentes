import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonLabel, IonList, IonItem, IonButton,
  IonDatetime, IonText, IonModal, IonDatetimeButton,
  IonButtons
} from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-datetime2',
  templateUrl: './datetime2.page.html',
  styleUrls: ['./datetime2.page.scss'],
  standalone: true,
  imports: [
    IonButtons, IonDatetimeButton, IonModal, IonText,
    IonDatetime, IonButton, IonItem, IonList, IonLabel, IonContent,
    CommonModule, FormsModule, HeaderComponent
  ],
  providers: [DatePipe]
})
export class Datetime2Page implements OnInit {
  // @ViewChild busca un elemento ion-datetime en el template y lo asigna a esta propiedad
  @ViewChild(IonDatetime) datetime!: IonDatetime;

  fechaNaci: string = '';
  fechaMax: string = new Date().toISOString();  // Fecha máxima es hoy
  fechaMin: string = '1900-01-01';  // Fecha mínima arbitraria
  fechaFormateada: string = '';

  constructor(private datePipe: DatePipe) {
    this.fechaNaci = new Date().toISOString();
    this.formatearFecha();
  }

  ngOnInit() { }

  // Se llama cada vez que cambia la fecha en el ion-datetime
  onDateChange(event: any) {
    this.fechaNaci = event.detail.value;
    this.formatearFecha();
    console.log(this.fechaFormateada);
    const fechaSeleccionada = new Date(this.fechaFormateada)
    const dia = fechaSeleccionada.getDay();
    const mes = fechaSeleccionada.getMonth()+1;
    const ano = fechaSeleccionada.getFullYear();
    console.log(`El dia elegido es ${dia}. El mes es ${mes} y el año es ${ano}`)
  }

  // Formatea la fecha para mostrarla en el formato deseado
  formatearFecha() {
    this.fechaFormateada = this.datePipe.transform(this.fechaNaci, 'dd MMMM YYYY') || '';
  }

  // Confirma la selección de fecha y cierra el modal
  confirmDate() {
    this.datetime.confirm(true);
  }

  // Cancela la selección de fecha y cierra el modal
  cancelDate() {
    this.datetime.cancel(true);
  }
}