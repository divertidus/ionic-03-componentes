import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonTitle, IonHeader, IonContent, IonButtons, IonMenu,IonMenuButton, IonSplitPane, IonList, IonItem, IonIcon, IonLabel, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonBackButton, IonLabel, IonIcon, IonItem, IonList, IonSplitPane, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonRouterOutlet, IonMenu, IonMenuButton, HeaderComponent],
})
export class AppComponent {
  constructor() {
    addIcons(ionIcons);
  }
}
// Este componente es el contenedor principal de tu aplicación
// IonApp proporciona la estructura básica de una aplicación Ionic
// IonRouterOutlet es donde se cargarán tus páginas basadas en la ruta actual

// Paso previo: Este componente se carga desde main.ts
// Siguiente paso: Las rutas definidas en app.routes.ts determinarán qué página se carga en IonRouterOutlet
