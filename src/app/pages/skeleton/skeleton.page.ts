import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonListHeader, IonItem, IonIcon, IonSkeletonText, IonButton, IonThumbnail } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
  standalone: true,
  imports: [IonButton, IonSkeletonText, IonIcon, IonItem, IonListHeader, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, CommonModule, FormsModule, HeaderComponent]
})
export class SkeletonPage implements OnInit {
  loaded: any;

  constructor() { }

  ngOnInit() {
  }

}
