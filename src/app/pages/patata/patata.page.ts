import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRadio, IonItem,IonMenu,IonMenuToggle } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-patata',
  templateUrl: './patata.page.html',
  styleUrls: ['./patata.page.scss'],
  standalone: true,
  imports: [IonItem, IonRadio, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenu,IonMenuToggle,HeaderComponent]
})
export class PatataPage implements OnInit {
  menuType: string = 'overlay';

  constructor() { }

  ngOnInit() {
  }

}
