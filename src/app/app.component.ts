import { Component } from '@angular/core';
import { resolve } from 'url';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre    : string   = 'Temístocles';
  nombre2   : string   = 'jOse tEmIstoCleS LedezMa';
  arreglo   : number[] = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] = ['Wolverine','Thor','Fenomenoide', 'Temox']
  PI        : number   = Math.PI;
  porcentaje: number   = 0.234;
  salario   : number   = 12345;
  fecha     : Date     = new Date();
  activar   : boolean  = true;

  idioma    : string = 'fr';
  videoUrl  : string = 'https://www.youtube.com/embed/l0bqdchhW7w';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(()=>{
      resolve('llego la data');
    },4500);
  });


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad : 500,
    direccion: {
      calle:'primera',
      casa: 7
    }
  }
  //se puede hacer mediante esta funcion
  cambioIdioma(vIdioma:string){
    //console.log(vIdioma);
    this.idioma=vIdioma;
  }

  cambioBoleano(bool:boolean){
    
    if (bool == true){
      this.activar=false
      
      return ;
    }else{
      this.activar=true;
    }

  }
}

