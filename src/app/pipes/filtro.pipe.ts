import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[],
    texto: string = '',
    columna: string = 'title'
  ): any[] {


    console.log(array);
    console.log(texto);

    if (texto === '') {
      return array;
    }

    if (!array) {
      return array;
    }

    texto = texto.toLocaleLowerCase();
    return array.filter(
      //item => item.title.toLowerCase().includes(texto) //Esto buscará para cada item del arreglo aquellos que incluyan el texto y 
      // lo dejará pasar ya que está dentro del return del array.filter. Sin embargo lo comento porque vamos a establecer mejor la variable columna
      // que por defecto diremos que es 'title' para que nada cambie, y decimos item[columna] ya que así programáticamente podemos decidir en que campo
      // queremos realizar la búsquda si hubiese más de uno. De esa manera podría mandarse desde el html como un argumento extra, véase:

      // <ion-item *ngFor="let album of albunes | filtro:textoBuscar:'title'">

      item => item[columna].toLowerCase().includes(texto)
    )

    return [];
  }

}
