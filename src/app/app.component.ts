// app.component.ts
// Este es el componente raíz de tu aplicación Ionic/Angular

import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
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
