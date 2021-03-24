import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarpass'
})

export class OcultarpassPipe implements PipeTransform {
  

  transform(value: string, mostrar:boolean=true): string {
    return ( mostrar ) ? '*'.repeat( value.length):value;
    
  //   //console.log(value.length);
  //   if(cambio){
  //   let clave : string='*';
  //   for( let i=1; i<value.length;i++){
  //     //console.log(value[i]); 
  //     clave = '*'+ clave;
  //   }
    
  //   return clave;
  // }else{
  // return value;
  // }
}
}
