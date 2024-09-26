import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFooter, IonBackButton, IonButtons, IonList, IonLabel, IonItem, IonFabList, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonFabList, IonItem, IonLabel, IonList, IonButtons, IonBackButton, IonFooter, IonIcon, IonFabButton, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class FabPage implements OnInit {

  data = Array(100);
  
  constructor() { }

  ngOnInit() {
  }

}
