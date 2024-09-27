import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonLabel, IonList, IonItem, IonReorder, IonReorderGroup, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ItemReorderEventDetail } from '@ionic/angular';
import { person, beerOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonReorderGroup, IonReorder, IonItem, IonList, IonLabel, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Pikachu', 'Mario', 'Sonic', 'Spiderman', 'Solid Snake'];

  constructor() {
      addIcons({beerOutline});
      }


  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group

    //Pero todo esto no reordena el array, realmente como podemos ver con el console.log(personajes) del final.
    // Si me interesa que el array vaya acorde a como se visualiza en pantalla debo hacerlo a mano
    // corto un solo elementos en la posicion del from. Devuleve un array, pero como solo me quedo con uno uso la pos[0]
    const itemMover = this.personajes.splice(ev.detail.from, 1)[0]
    // Con splice puedo cortar y luego insertar, primero le digo la posicion, luego cuantos corto y luego que array meto dentro del array.
    this.personajes.splice(ev.detail.to, 0, itemMover)


    ev.detail.complete();
    console.log(this.personajes)
  }

  public isDisabled = true;

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit() {
  }

}
