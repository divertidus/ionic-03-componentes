// data.service.ts
// Este es un servicio que maneja las peticiones HTTP en tu aplicación

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // El constructor inyecta HttpClient
  // Esto es posible porque provideHttpClient() está configurado en main.ts
  constructor(private http: HttpClient) { }

  // Este método realiza una petición GET a una API externa
  getUsuarios() {
    // Utilizamos el método get de HttpClient para hacer la petición
    // El resultado es un Observable que se puede suscribir en los componentes
    return this.http.get("https://jsonplaceholder.typicode.com/users");

    /* 
    Este método retorna un Observable.
      No realiza la petición HTTP inmediatamente, solo la define.

      Por qué usamos subscribe

      subscribe es como decir "estoy listo para recibir los datos cuando lleguen".
      Inicia la ejecución del Observable (en este caso, realiza la petición HTTP).
      Permite manejar los datos cuando llegan.

      Cómo funciona

      this.dataService.getUsuarios() retorna un Observable.
      .subscribe(console.log) hace dos cosas:

      Inicia la petición HTTP.
      Dice "cuando lleguen los datos, pásalos a console.log".
    */

  }
}

// Paso previo: HttpClient se configura globalmente en main.ts
// Siguiente paso: Este servicio se inyecta y utiliza en componentes como list.page.ts

/*
Pendiente de ver:

En versiones más recientes de Angular, se recomienda usar el pipe async 
en el template para suscribirse a Observables,
lo que puede simplificar el manejo de la suscripción en algunos casos.
*/