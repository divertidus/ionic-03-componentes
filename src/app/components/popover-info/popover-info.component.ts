import { Component, OnInit } from '@angular/core';
import { IonList, IonLabel, IonItem } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  standalone: true,
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  imports: [IonItem, IonLabel, IonList, CommonModule]
})

export class PopoverInfoComponent implements OnInit {

  items = Array(7)

  onClick(numeroItem: number) {

    console.log("Click en item numero: " + numeroItem)
    this.popoverCtrl.dismiss({
      item: numeroItem
    });

  }

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

}
