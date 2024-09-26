import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonImg, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
