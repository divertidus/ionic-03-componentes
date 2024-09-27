import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
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

  /*
  1. ¿Qué es @ViewChild?
@ViewChild es un decorador de Angular que permite acceder a un elemento del DOM 
o a una instancia de un componente hijo dentro de tu clase de componente. 
Te proporciona una referencia directa a ese elemento o componente para poder 
interactuar con él desde el TypeScript de tu componente.

En este caso, @ViewChild(IonList) busca en el template HTML un componente IonList 
(que es parte de Ionic) y guarda una referencia a él en la propiedad ionList de tu clase.
2. Sintaxis:

  @ViewChild(IonList) ionList!: IonList;
    @ViewChild(IonList) busca el componente IonList dentro del template.
    ionList!: IonList define una propiedad en la clase llamada ionList de tipo IonList. 
    El operador ! indica que estamos seguros de que esa referencia no será null o undefined 
    después de que la vista sea inicializada.
3. ¿Por qué usamos @ViewChild en este contexto?
En este caso, tienes un componente <ion-list> en tu template HTML, 
y dentro de ese <ion-list> hay elementos deslizables (sliding items), como tarjetas de usuario,
 que tienen botones para realizar acciones (compartir, marcar como favorito o borrar). 
 Cada vez que se hace clic en uno de estos botones, quieres cerrar los elementos deslizables, 
 y para ello necesitas interactuar directamente con el IonList.

Al utilizar @ViewChild, puedes acceder a las funcionalidades del componente IonList, 
como el método closeSlidingItems(), que cierra cualquier elemento deslizante que esté 
abierto en el IonList.
  */
  @ViewChild(IonList) ionList!: IonList;

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

  compartir(user: any) {
    console.log('compartir', user)
    //Gracias al viewchild podemos referenciar el propio ionList y llamar a su metod closeSlidingItems tras elegir la opcion
    this.ionList.closeSlidingItems();
  }

  favorito(user: any) {
    console.log('favorito', user)
    //Gracias al viewchild podemos referenciar el propio ionList y llamar a su metod closeSlidingItems tras elegir la opcion
    this.ionList.closeSlidingItems();
  }

  borrar(user: any) {
    console.log('borrar', user)
    //Gracias al viewchild podemos referenciar el propio ionList y llamar a su metod closeSlidingItems tras elegir la opcion
    this.ionList.closeSlidingItems();
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