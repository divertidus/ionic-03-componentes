import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, IonSegment, IonSegmentButton, IonLabel, SegmentChangeEventDetail, IonIcon, IonList, IonItem, IonButtons, IonBackButton, IonListHeader, IonSkeletonText, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { IonSegmentCustomEvent } from '@ionic/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
// Importación del pipe personalizado para filtrado
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  // Importaciones necesarias para el componente standalone
  // Incluye FiltroPipe para poder usarlo en el template
  imports: [IonButton, IonSkeletonText, IonListHeader, IonBackButton, IonThumbnail, IonButtons, IonItem, FiltroPipe, IonList, IonIcon, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class SegmentPage implements OnInit {
  // ViewChild se usa para obtener una referencia al componente IonList en el template
  // Esto permite interactuar programáticamente con la lista si es necesario
  @ViewChild(IonList) ionList!: IonList

  /*loaded: boolean = false; // Estra para skeleton*/


  // Variable para almacenar el texto de filtrado
  // Se actualiza cuando el usuario cambia el segmento
  textoPublisher: string = '';

  // Observable que contendrá los datos de los superhéroes
  // Se usa Observable para manejar datos asincrónicos de manera eficiente
  superheroes!: Observable<any>


  // Inyección del servicio DataService para obtener los datos de los superhéroes
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Inicialización del Observable de superhéroes
    // getSuperheroes() devuelve un Observable, permitiendo actualizaciones en tiempo real si los datos cambian
    this.superheroes = this.dataService.getSuperheroes();


    /* 
    El siguiente parametro es para el skeleton y el bloque comentado para simular unar carga previa
    Pero vamos a modificar el metodo  de getSuperheroes del dataService para realizar ese retraso ahi con 
    el metodo delay importable de rxjs/operators. Antes aqui esto se ejecutaba al cargar la pagina.
    */

    /*
    this.loaded = false;
    
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000); 
    */
  }

  // Método que se ejecuta cuando cambia el segmento seleccionado
  // El parámetro event contiene información sobre el cambio
  segmentChanged(event: any) {
    // Actualiza textoBuscar con el valor del segmento seleccionado
    // Esto desencadena el filtrado en el template
    this.textoPublisher = event.detail.value;

    console.log("DESDE EL METODO DEL TS" + event.detail.value)


    /* 
    El siguiente parametro es para el skeleton y el bloque comentado para simular unar carga previa
    Pero vamos a modificar el metodo  de getSuperheroes del dataService para realizar ese retraso ahi con 
    el metodo delay importable de rxjs/operators. Antes aqui esto se ejecutaba a cada click en el titulo del segment
    */

    /*
    this.loaded = false;

     setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000); 

    */
  }

}

/* 
Flujo paso a paso para segment.page.ts:

1. Cuando se inicializa el componente, el método ngOnInit() se ejecuta, 
llamando a this.dataService.getSuperheroes() para obtener un Observable 
con los datos de los superhéroes.

2. El Observable superheroes se usa en el template con el operador async, 
lo que significa que se suscribe automáticamente y se actualiza 
cuando hay nuevos datos.

3. Cuando el usuario cambia el segmento seleccionado, se llama al 
método segmentChanged(event).

4. segmentChanged(event) actualiza textoBuscar con el valor del segmento 
seleccionado ("todos", "DC Comics" o "Marvel Comics").

5. La actualización de textoBuscar provoca que el pipe filtro en el 
template se ejecute de nuevo, filtrando la lista de superhéroes.

6. El pipe filtro (que definiste anteriormente) filtra el array de 
superhéroes basándose en textoBuscar y la propiedad 'publisher'.

7. La lista filtrada se renderiza en el template, 
mostrando solo los superhéroes que coinciden con el filtro actual.

Este flujo permite una filtración dinámica de los superhéroes 
basada en la selección del usuario, sin necesidad de recargar 
la página o hacer nuevas peticiones al servidor, ya que todo el filtrado se realiza en el cliente.
 */


/* 
Explicación detallada del funcionamiento y la lógica de ordenación/filtrado:

Importación y uso del FiltroPipe:

El FiltroPipe se importa en segment.page.ts y se incluye en el array de imports del decorador @Component.
Esto permite usar el pipe en el template HTML para filtrar la lista de superhéroes.


Uso de ViewChild:

@ViewChild(IonList) se utiliza para obtener una referencia directa al componente IonList del template.
Aunque no se usa en este código, podría ser útil para realizar operaciones programáticas en la lista, como desplazamiento o actualización de elementos.


Observable de superhéroes:

superheroes se declara como un Observable, lo que permite manejar datos asincrónicos de manera eficiente.
En ngOnInit(), se inicializa llamando a this.dataService.getSuperheroes(), que presumiblemente devuelve un Observable.


Filtrado en el template:

En el HTML, se usa (superheroes|async) para convertir el Observable en un array.
Luego se aplica el pipe de filtro: |filtro:textoBuscar:'publisher'.
Esto filtra la lista de superhéroes basándose en el valor de textoBuscar y la propiedad 'publisher' de cada superhéroe.


Actualización del filtro:

El ion-segment en el HTML tiene un evento (ionChange) que llama a segmentChanged($event).
En segmentChanged(), se actualiza textoBuscar con el nuevo valor del segmento.
Cada vez que textoBuscar cambia, Angular re-evalúa la expresión en el template, lo que resulta en un nuevo filtrado de la lista.


Flujo de datos:

Cuando se carga la página, se obtienen todos los superhéroes.
El usuario selecciona un segmento (Todos, DC, o Marvel).
segmentChanged() actualiza textoBuscar.
El pipe de filtro en el template recibe el nuevo valor de textoBuscar y filtra la lista.
La lista filtrada se renderiza automáticamente en el template.



Este enfoque permite un filtrado dinámico y eficiente de los superhéroes sin necesidad de realizar nuevas solicitudes al servidor. 
Todo el filtrado ocurre en el cliente, proporcionando una experiencia de usuario fluida y rápida.
*/