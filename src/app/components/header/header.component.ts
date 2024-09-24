import { Component, Input, input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle]
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit() { }

}
