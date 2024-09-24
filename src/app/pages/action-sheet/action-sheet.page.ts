import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonActionSheet } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonActionSheet, HeaderComponent, IonBackButton, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, FormsModule]
})
export class ActionSheetPage implements OnInit {

  isActionSheetOpen = false;

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass: 'rojo',
      data: {
        action: 'delete',
      },
      handler: () => this.onActionSheetButtonClick('delete') // Agregamos la funcionalidad    
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
      handler: () => this.onActionSheetButtonClick('share') // Agregamos la funcionalidad
    },
    {
      text: 'play',
      icon: 'play-outline',
      data: {
        action: 'share',
      },
      handler: () => this.onActionSheetButtonClick('play') // Agregamos la funcionalidad
    },
    {
      text: 'Favourite',
      icon: 'heart-outline',
      data: {
        action: 'favourite',
      },
      handler: () => this.onActionSheetButtonClick('favourite') // Agregamos la funcionalidad
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close-outline',
      data: {
        action: 'cancel',
      },
      handler: () => { console.log('Acción cancelada'); } //Por hacerlo diferente le añado directamente la funcionalidad sin usar el metodo de abajo para los clicks
    },
  ];



  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }


  onActionSheetButtonClick(action: string) {
    switch (action) {
      case 'delete':
        console.log('Elemento eliminado');
        break;
      case 'share':
        console.log('Elemento compartido');
        break;
      case 'play':
        console.log('Pulsado play');
        break;
      case 'favourite':
        console.log('Pulsado favorito');
        break;
      case 'cancel':
        console.log('Acción cancelada');
        break;
      default:
        console.log('Acción no reconocida');
    }
    this.setOpen(false); // Cierra el Action Sheet después de cualquier acción
  }

}
