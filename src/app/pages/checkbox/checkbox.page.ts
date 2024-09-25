import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonTabBar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonButton, IonTabBar, IonLabel, IonItem, IonList, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class CheckboxPage implements OnInit {



  onClick(item: any) {
    console.log(item) /* Ahora cuando se haga click se mostrara en consola cual y su estado */
  }
  entry: any = [
    {
      val: 'Pikachu'
    },
    {
      val: 'Sonic'
    },
    {
      val: 'Mario'
    },
    {
      val: 'Kirby'
    },
    {
      val: 'Crash'
    },
    {
      val: 'Kratos'
    },
  ]

  data = [
    {
      name: 'primary',
      selected: false
    }, {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    },

  ]

  verData() {
    console.log(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
