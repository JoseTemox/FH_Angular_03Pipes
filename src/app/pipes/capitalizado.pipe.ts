import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  //transform(value: any, ...args: any[]): string {
    //transform(value: any, edad: number,activo: true, mensaje: string): string {
      transform(value: string, todas: boolean = true): string {
        value = value.toLocaleLowerCase();
        let nombres = value.split(' ');/// separo las palabras
        
        if(todas){
          nombres = nombres.map( nombre =>{
            return nombre[0].toUpperCase() + nombre.substr(1);
          })
          
        }else{
          nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
          
        }
        return nombres.join(' ');

    //console.log(value);
    //console.log(args);
    //console.log({edad,activo,mensaje})
    
  }

}
