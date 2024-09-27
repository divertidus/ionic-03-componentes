import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ListPage implements OnInit {

  /* Haremos peticiones HTTP con angular con el modulo HttpClienteModule de @angular/common/http, ese sale deprecated,
  uso import { HttpClient } from '@angular/common/http';  */

  /* El constructor inyecta el DataService
  // Esto permite que esta página pueda usar los métodos del servicio para obtener datos

  
  Qué significa: Este es un ejemplo de inyección de dependencias en Angular.
    Cómo funciona:

    Angular crea una instancia de DataService.
    Angular "inyecta" esta instancia en el constructor cuando crea el componente.
    private dataService: DataService hace que esta instancia esté disponible como una propiedad privada en la clase.

    Por qué se usa: Permite que el componente use los métodos y propiedades de DataService sin tener que crear manualmente una instancia.
  */
  constructor(private dataService: DataService) { }

  /* Creo una variable Observable que acepte cualquier tipo para guardar el resultado de la peticon html */
  usuarios!: Observable<any>;

  ngOnInit() {

    /*  Cuando la página se inicializa, llamamos al método getUsuarios del servicio
        Esto desencadena una petición HTTP definida en data.service.ts
        Se usa subscribe porque es un Observable ( si se deja el raton encima de getUsuarios() se puede ver.
    
      Qué es un Observable
        Un Observable es como una "corriente" de datos que puede emitir múltiples valores a lo largo del tiempo.
        En el contexto de HTTP, representa la respuesta futura de una petición.
    */
    this.dataService.getUsuarios().subscribe(console.log)
    /* Asigno a mi variable observable usuarios la data obtenida  y lo usaremos desde el html*/
    this.usuarios = this.dataService.getUsuarios();

    /*
    Cómo funciona

      this.dataService.getUsuarios() retorna un Observable.
      .subscribe(console.log) hace dos cosas:

      Inicia la petición HTTP.
      Dice "cuando lleguen los datos, pásalos a console.log".
    */
  }

}

/* 
   Paso previo: Esta página se carga cuando la ruta correspondiente se activa en app.routes.ts
   Siguiente paso: Los datos obtenidos de DataService se pueden usar en el template (list.page.html)


Recuerda que el flujo general es:

main.ts configura la aplicación y los proveedores globales.
app.component.ts proporciona la estructura básica de la aplicación.
Las rutas en app.routes.ts (que no hemos mostrado aquí) determinan qué páginas se cargan.
Los componentes como list.page.ts utilizan servicios como data.service.ts para obtener datos.
Los servicios utilizan HttpClient (configurado en main.ts) para hacer peticiones HTTP.
*/


/*
Formas de usar subscribe

    Con console.log (como en el ejemplo):

        typescriptCopythis.dataService.getUsuarios().subscribe(console.log)

        Esto simplemente imprime los datos en la consola.


    Con una función callback:

        typescriptCopythis.dataService.getUsuarios().subscribe(
          (datos) => {
            this.usuarios = datos;
            // Hacer algo más con los datos
          }
        )
        Esto te permite hacer más cosas con los datos recibidos.

    Manejando errores:

      typescriptCopythis.dataService.getUsuarios().subscribe(
        (datos) => {
          this.usuarios = datos;
        },
        (error) => {
          console.error('Ocurrió un error:', error);
        }
      )
      Esto te permite manejar tanto los datos como los posibles errores.

Importante recordar

Los Observables son "perezosos": no hacen nada hasta que te suscribes.
subscribe inicia la operación y define qué hacer con el resultado.
Siempre considera manejar los errores al suscribirte a un Observable.
*/