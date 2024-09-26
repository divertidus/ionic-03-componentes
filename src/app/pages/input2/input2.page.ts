import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonListHeader, IonButton, IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-input2',
  templateUrl: './input2.page.html',
  styleUrls: ['./input2.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonList, IonButton, IonListHeader, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class Input2Page implements OnInit {

  usuario = {
    email: '',
    password: ''
  }


  /* Con esto puedo ver en  consola la info que se introdujo en el formulario, si este era valido claro, sino no llega aqui */

  /* Tambien podríamos recibir el formulario completo tal y como lo gestiona angular
  Para ello tendriamos que recibir el formulario del html de tipo NgForm( importamos)
  En la llamada al metodo del html debemos mandar el formulario como parametro claro.
  Quedaria esa linea asi:  <form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
  Y si imprimimmos con console.log el mismo podremos ver toda la informacion en la consola del navegador
  En ese sitio, en controls tendremos el email y password pero veremos muchisima mas informacion */
  onSubmit(formulario: NgForm) {
    console.log('Se pulso Enter')
    console.log(this.usuario)
    console.log(formulario)
  }


  /* Creamos un objeto usuario, por ejemplo, con email y contraseña como campos, vacios de primeras. Los manejaré
  con los inputs por lo que en el formulario, en el input, donde quiera relacionarlos haré, por ejmplo.
  [(ngModel)] = "usuario.email"  y ya tendría la bidireccionalidad hecha para que se reflejen y comprueben los valores. */


  constructor() { }

  ngOnInit() {
  }

}
