import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonRange, IonIcon, IonText, RangeChangeEventDetail } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { IonRangeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonRange, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class RangePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pinFormatter(value: number) {
    return `${value}%`;
  }


  onIonChange(ev: Event) {
    console.log('ionChange emitted value:', (ev as CustomEvent).detail.value);
  }

  onIonKnobMoveStart(ev: Event) {
    console.log('ionKnobMoveStart:', (ev as CustomEvent).detail.value);
  }

  onIonKnobMoveEnd(ev: Event) {
    console.log('ionKnobMoveEnd:', (ev as CustomEvent).detail.value);
  }

}
