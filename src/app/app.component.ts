import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonTitle, IonHeader, IonMenuToggle, IonContent, IonButtons, IonMenu, IonMenuButton, IonSplitPane, IonList, IonItem, IonIcon, IonLabel, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';
import { HeaderComponent } from "./components/header/header.component";
import { RouterLink, Routes } from '@angular/router';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { MenuController } from '@ionic/angular';
import { AsyncPipe, NgForOf, CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonBackButton, CommonModule, NgForOf, IonMenuToggle, RouterLink, AsyncPipe, IonLabel, IonIcon, IonItem, IonList, IonSplitPane, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonRouterOutlet, IonMenu, IonMenuButton, HeaderComponent],
})
export class AppComponent implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(
    private dataService: DataService,
    private menuCtrl: MenuController
  ) {
    addIcons(ionIcons);
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts(); //
    this.componentes.subscribe(data => {
      console.log('Datos del menú:', data);
    });
  }


  
}
// Este componente es el contenedor principal de tu aplicación
// IonApp proporciona la estructura básica de una aplicación Ionic
// IonRouterOutlet es donde se cargarán tus páginas basadas en la ruta actual

// Paso previo: Este componente se carga desde main.ts
// Siguiente paso: Las rutas definidas en app.routes.ts determinarán qué página se carga en IonRouterOutlet
/*

componentes!: Observable<Componente[]>;
  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService //Inyectamos nuestro servicio de dataService para poder acceder al metodo getMenuOpts
  ) { }

  mostrarMenu() {
    console.log("pulsado boton menu")
    this.menuCtrl.open("menu");
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts(); //
  }
 */