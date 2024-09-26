import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonLabel, IonItem, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { IonInfiniteScrollCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonItem, IonLabel, IonList, IonInfiniteScrollContent, IonInfiniteScroll, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20)

  /*  En términos simples, esta línea le dice a Angular: 
   "Busca en mi template HTML un elemento ion-infinite-scroll
    y dame acceso a él en mi código TypeScript a través de la propiedad infiniteScroll". */


  /*Vamos a usar el @ViewChild en el codigo para tener una referencia a esto desde alli */
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  /* Aqui toca usar ese setTimeout y definir lo del evento del loadData como se ve aqui. */

/*
Gracias al viewchild podemos incluso prescindir del event del loadData ya que no necesitaremos el evento del html sino 
que mas bien controlamos el flujo desde el codigo accediendo directamente a l infinite scrll del html como si fuese una propiedad
con la que trabajamos directamente. MEJOR METODO
*/ 

  loadData() {
    console.log()
    console.log(this.data.length);
    setTimeout(() => {

      if (this.data.length >= 99) {
        //this.infiniteScroll.complete(); //lo completamos primero
        this.infiniteScroll.disabled = true; //desactivamos el infinite scroll
        return; //salimos del flujo para que no siga ejecutando lo que sigue
      }

      const nuevoArr = Array(20); // creamos un nuevo array
      this.data.push(...nuevoArr) // metemos el nuevo array al array data
      this.infiniteScroll.complete(); //terminamos "la carga"

    }, 1500);

  }

  constructor() { }

  ngOnInit() {
    /*  for (let i = 1; i < 51; i++) {
       this.items.push(`Item ${i}`);
     } */
  }

  /*  private generateItems() {
     const count = this.items.length + 1;
     for (let i = 0; i < 50; i++) {
       this.items.push(`Item ${count + i}`);
     }
   }
 
   // Cambiamos InfiniteScrollCustomEvent a CustomEvent
   onIonInfinite(ev: CustomEvent) {
     this.generateItems();
     setTimeout(() => {
       (ev.target as HTMLIonInfiniteScrollElement).complete();
     }, 500);
   } */
}


