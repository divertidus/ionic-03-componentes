import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonList, IonLabel, IonItem, SearchbarChangeEventDetail } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: true,
  imports: [IonItem, FiltroPipe, IonLabel, IonList, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchbarPage implements OnInit {

  @ViewChild(IonList) ionList!: IonList

  albunes: any[] = [];
  textoBuscar: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbums().subscribe(albunes => {
      /* console.log(albunes) */
      this.albunes = albunes;

    })
  }

  onSearchEvent(event: CustomEvent) {
    this.textoBuscar = event.detail.value;
    console.log(event.detail.value)

  }



}
