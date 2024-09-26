import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButton, IonList, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

/*Defino una interfaz con lo que tendrá que tener cada tipo Componente que cree a posteriori*/
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonLabel, IonList, IonList, IonButton, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class InicioPage implements OnInit {

  /*Creo componentes indicando que será de tipo Componente para que tenga que implementar lo que pusimos en la interfaz superior.*/
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'megaphone-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'pizza-outline',
      name: 'Patata',
      redirectTo: '/patata'
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'keypad-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime accordion',
      redirectTo: '/datetime'
    },
    {
      icon: 'calendar',
      name: 'Datetime sin acordion',
      redirectTo: '/datetime2'
    },
    {
      icon: 'add-circle-outline',
      name: 'Fab - Floating Action Button',
      redirectTo: '/fab'
    },
    {
      icon: 'color-palette-outline',
      name: 'Colores personalizados SCSS',
      redirectTo: '/custom-colors'
    },
    {
      icon: 'grid-outline',
      name: 'Grid Row Col',
      redirectTo: '/grid'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
