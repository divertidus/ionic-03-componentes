import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonButton, IonCol, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ButtonsPage implements OnInit {
  favorito: boolean = false;
  icono: string = 'heart';
  onClick() {
    this.favorito = !this.favorito;
  }

  constructor() { }

  ngOnInit() {
  }

}
