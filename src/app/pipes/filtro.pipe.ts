import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {
  // Método transform que se ejecuta cada vez que se usa el pipe
  transform(
    array: any[], // El array que queremos filtrar
    texto: string = '', // El texto por el que queremos filtrar, por defecto vacío
    columna: string = 'title' // La columna del array que queremos filtrar, por defecto 'title'
  ): any[] {

    console.log(array);
    console.log(JSON.stringify(array)); // Imprime el array original
    console.log(texto); // Imprime el texto de búsqueda

    // Si no hay texto de búsqueda, devuelve el array completo
    if (texto === '') {
      console.log("desde filtro este es el texto: " + texto)
      console.log("desde filtro este es el texto: " + columna)
      return array;
    }

    // Si el texto es 'todos', devuelve el array completo
    /* Comento esta solucion para que venga del con valor vacio al hacer click en "todos"
    ya que, y si hubiese algun publisher llamado "todos"?
    */
    /* if (texto === 'todos') {
      console.log("desde filtro este es el texto: " + texto)
      return array;
    } */

    // Si el array es nulo o indefinido, lo devuelve tal cual
    if (!array) {
      console.log("desde filtro array mal")
      return array;
    }

    console.log("desde filtro antes de filtrar. texto: " + texto + " y columna: " + columna)

    // Convierte el texto de búsqueda a minúsculas para una comparación insensible a mayúsculas/minúsculas
    texto = texto.toLocaleLowerCase();

    console.log("desde filtro antes de filtrar. texto: " + texto + " y columna: " + columna)

    // Filtra el array
    return array.filter(
      //item => item.title.toLowerCase().includes(texto) //Esto buscará para cada item del arreglo aquellos que incluyan el texto y 
      // lo dejará pasar ya que está dentro del return del array.filter. Sin embargo lo comento porque vamos a establecer mejor la variable columna
      // que por defecto diremos que es 'title' para que nada cambie, y decimos item[columna] ya que así programáticamente podemos decidir en que campo
      // queremos realizar la búsquda si hubiese más de uno. De esa manera podría mandarse desde el html como un argumento extra, véase:

      // <ion-item *ngFor="let album of albunes | filtro:textoBuscar:'title'">

      // Para cada elemento del array, comprueba si el valor de la columna especificada
      // (convertido a minúsculas) incluye el texto de búsqueda
      item => item[columna].toLowerCase().includes(texto)
    )

    // Este return [] nunca se ejecutará porque la función siempre retornará en alguno de los casos anteriores
    return [];
  }

}
