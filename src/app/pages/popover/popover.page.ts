import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { PopoverController } from "@ionic/angular"
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent],
  providers: [PopoverController]
})
export class PopoverPage implements OnInit {
  onClick() {
    throw new Error('Method not implemented.');
  }

  constructor(private popoverCtrl: PopoverController) { }

  async presentPopover(event: any) {

    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: event,
      translucent: true,
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data)
    console.log(data.item)
  }



  ngOnInit() {
  }

}
