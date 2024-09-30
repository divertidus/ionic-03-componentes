import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonLabel, IonList, IonItem, IonButtons, IonBackButton, IonCol, IonRange, IonIcon, IonTabBar, RangeChangeEventDetail } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { IonRangeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonIcon, IonRange, IonCol, IonBackButton, IonButtons, IonItem, IonList, IonLabel, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ProgressPage implements OnInit {

  progreso: number = 0.05;
  buffer: number = 0.4;
  valorRange1: any = 0;
  valorRange2: any = 0;

  rangeChange(ev: CustomEvent) {
    this.valorRange1 = ev.detail.value / 100
    console.log(ev.detail.value)

  }

  rangeChangeInstant(ev: CustomEvent) {
    this.valorRange2 = ev.detail.value / 100
    console.log(ev.detail.value)

  }

  constructor() { }

  ngOnInit() {
  }

}
