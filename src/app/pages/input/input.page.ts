import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonList, IonLabel, IonButton, IonListHeader, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonItem, IonListHeader, IonButton, IonLabel, IonList, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InputPage implements OnInit {

  /* Variables para obtener los datos de los inputs */
  nombre: string = 'Cámbiame';



  constructor() { }

  ngOnInit() {
  }

  onNombreChange(newNombre: string) {
    console.log('Valor del nombre:', newNombre);
  }

}
