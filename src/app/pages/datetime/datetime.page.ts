import { Component, OnInit } from '@angular/core'; // Importamos lo esencial para definir el componente
import { DatePipe } from '@angular/common';  // Importamos DatePipe para formatear la fecha
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { FormsModule } from '@angular/forms'; // Módulo de formularios para trabajar con datos
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonButton,
  IonListHeader, IonDatetime, IonText, IonModal, IonDatetimeButton, IonAccordionGroup,
  IonAccordion, IonNote, IonButtons
} from '@ionic/angular/standalone'; // Importamos los componentes de Ionic necesarios
import { HeaderComponent } from "../../components/header/header.component"; // Componente de cabecera personalizado

@Component({
  selector: 'app-datetime', // Selector del componente
  templateUrl: './datetime.page.html', // Ruta al archivo de la plantilla HTML
  styleUrls: ['./datetime.page.scss'], // Ruta al archivo de estilos CSS
  standalone: true, // Hacemos el componente standalone para ser usado sin declararlo en un módulo
  imports: [IonButtons,
    IonNote, IonAccordion, IonAccordionGroup, IonDatetimeButton, IonModal, IonText,
    IonDatetime, IonListHeader, IonButton, IonItem, IonList, IonLabel, IonContent,
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent
  ], // Componentes que vamos a utilizar
  providers: [DatePipe] // Proveedor para formatear la fecha
})
export class DatetimePage implements OnInit {

  // Variables que definen las fechas que vamos a utilizar
  fechaNaci: string = '';  // Almacena la fecha de nacimiento seleccionada
  fechaMax: string = '2024-12-31';   // Definimos la fecha máxima permitida para el calendario (opcional)
  fechaMin: string = '1989-06-04';  // Definimos la fecha mínima permitida
  fechaFormateada: string = '';  // Almacena la fecha formateada para mostrarla en el ion-note

  // El constructor es llamado cuando se inicializa el componente
  constructor(private datePipe: DatePipe) { // Inyectamos DatePipe para formatear fechas

    // Obtenemos la fecha actual y la convertimos a formato ISO que es el esperado por ion-datetime
    this.fechaNaci = new Date().toISOString();

    // Usamos DatePipe para transformar la fecha en el formato deseado para mostrarla en el ion-note
    // 'dd MMMM YYYY' dará algo como '23 septiembre 2024'
    this.fechaFormateada = this.datePipe.transform(this.fechaNaci, 'dd MMMM YYYY') || '';
  }

  // Este método se llama cuando el componente termina de cargarse
  ngOnInit() {
  }

  // Método que se llama cuando se selecciona una fecha en el calendario (Done button)
  // event.detail.value contiene la fecha seleccionada en formato ISO
  onDateChange(event: any) {
    this.fechaNaci = event.detail.value; // Actualizamos la fecha con la nueva seleccionada
    // Formateamos la nueva fecha usando el DatePipe para mostrarla correctamente
    this.fechaFormateada = this.datePipe.transform(this.fechaNaci, 'dd MMMM YYYY') || '';
  }

  // Este método cierra el modal (ion-modal) manualmente
  closeModal(datetime: IonDatetime) {
    datetime.confirm(); // Confirma la fecha seleccionada y cierra el modal
  }

  cancelModal(datetime: IonDatetime) {
    datetime.cancel(); // Cancela la selección de la fecha y cierra el modal
  }
}
