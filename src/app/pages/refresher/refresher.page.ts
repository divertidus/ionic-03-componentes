import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { IonRefresherCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class RefresherPage implements OnInit {


  handleRefresh(event: any) {
    setTimeout(() => {
      this.items = Array(20);
      // Any calls to load data go here
      console.log("Recargando");
      event.target.complete();
    }, 1500);
  }


  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
