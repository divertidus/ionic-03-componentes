import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonFooter } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-custom-colors',
  templateUrl: './custom-colors.page.html',
  styleUrls: ['./custom-colors.page.scss'],
  standalone: true,
  imports: [IonFooter, IonFabList, IonIcon, IonFabButton, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class CustomColorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
