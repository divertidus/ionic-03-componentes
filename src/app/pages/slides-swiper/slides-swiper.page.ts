import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonNote, IonDatetime, IonButtons, IonButton, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { register } from 'swiper/element/bundle';
import { Router, RouterLink } from '@angular/router';

register();

@Component({
  selector: 'app-slides-swiper',
  templateUrl: './slides-swiper.page.html',
  styleUrls: ['./slides-swiper.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonText, IonButton, IonButtons, IonDatetime, IonNote, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class SlidesSwiperPage implements OnInit {
  onClick() {
    this.router.navigate(['/']);
  }

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
