import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonLoading } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonLoading, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  async mostrarLoading() {
    const loading = await this.loadingCtrl.create({ //o en vez de const loading podria usar el this.loading que cree mas arriba
      duration: 3000,
      message: 'Cargando por 3 segundos',

    });

    loading.present();
    // o this.loading.present() si quiero usar el loading custom de arriba de loading!: HTMLIonLoadingElement;
  }

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

}
