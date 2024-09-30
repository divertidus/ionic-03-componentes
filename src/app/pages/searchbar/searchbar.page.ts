import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonList, IonLabel, IonItem, SearchbarChangeEventDetail } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchbarPage implements OnInit {

  onSearchEvent(event: any) {
    console.log(event)
  }

  @ViewChild(IonList) ionList!: IonList

  constructor(private dataService: DataService) { }

  albunes: any[] = [];

  ngOnInit() {

    this.dataService.getAlbums().subscribe(albunes => {
      console.log(albunes)
      this.albunes = albunes;
    })


  }



}
