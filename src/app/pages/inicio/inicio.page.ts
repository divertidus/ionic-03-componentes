import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButton, IonList, IonLabel, IonItem, IonIcon, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

/*Defino una interfaz con lo que tendrá que tener cada tipo Componente que cree a posteriori*/

/* Ya no hace falta porque lo he pasado a un archivo aparte en app/interfaces/interfaces.ts 
con un export en su interior para poder importarlo aqui arriba

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonIcon, IonItem, IonLabel, IonList, IonList, IonButton, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class InicioPage implements OnInit {


  /*Creo componentes indicando que será de tipo Componente para que tenga que implementar lo que pusimos en la interfaz superior.*/
  /* este super array ya no hace falta, lo haremos diferente
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
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    }, {
      icon: 'pencil-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-four-outline',
      name: 'List - Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirectTo: '/loading'
    }



  ] //ESTO YA NO HACE FALTA, LO HAREMOS DIFERENTE  */


  //componentes va a ser un Obserbable en el cual se van a estar emitiendo valores de Componente pero como un array 
  //El operador ! le dice a TypeScript que esta propiedad será inicializada antes de su uso.
  //Cuidado con no usar = y usar :
  componentes!: Observable<Componente[]>;
  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService //Inyectamos nuestro servicio de dataService para poder acceder al metodo getMenuOpts
  ) { }

  mostrarMenu() {
    console.log("pulsado boton menu")
    this.menuCtrl.open("menu");
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts(); //
  }

}
