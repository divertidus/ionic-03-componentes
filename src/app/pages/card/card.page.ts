import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonCard, IonThumbnail, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonItem, IonButton, IonList
} from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonItem, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonThumbnail, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class CardPage implements OnInit {


  constructor() { }

  clickAccion1() {
    console.log("Se hizo click en accion 1")
  }


  clickAccion2() {
    console.log("Se hizo click en accion 2")
  }

  ngOnInit() {
  }

}
