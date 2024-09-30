import { Component, OnInit } from '@angular/core';
import { IonList, IonLabel, IonItem } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-info',
  standalone: true,
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  imports: [IonItem, IonLabel, IonList, CommonModule]
})

export class PopoverInfoComponent implements OnInit {

  items = Array(40)

  onClick(ev: Event) {
    const objetoClicado = ev.currentTarget as HTMLElement;
    const label = objetoClicado.querySelector('ion-label')?.textContent;
    console.log(label)
    
  }

  constructor() { }

  ngOnInit() { }

}
