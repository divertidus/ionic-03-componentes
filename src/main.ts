import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Aquí se inicia la aplicación y se configuran los proveedores globales
bootstrapApplication(AppComponent, {
  providers: [
    // Configuración de la estrategia de reutilización de rutas de Ionic
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Proporciona las funcionalidades básicas de Ionic
    provideIonicAngular(),

    // Configura el enrutador con las rutas definidas en app.routes.ts
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // IMPORTANTE: Configura HttpClient para toda la aplicación
    // Esto permite que los servicios como DataService puedan usar HttpClient
    provideHttpClient()
  ],
});

// Siguiente paso para el tema de HTTP: AppComponent en app.component.ts
// AppComponent es el componente raíz que se carga al iniciar la aplicación


/*
He necesitado añadir import { provideHttpClient } from '@angular/common/http';
y 

provideHttpClient() a los providers para poder hacer funcionar la parte http, en concreto para la parte de la list y el json
*/ 