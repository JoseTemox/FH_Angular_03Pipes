import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { registerLocaleData} from '@angular/common';
import  localEs from '@angular/common/locales/es';
import  localFr from '@angular/common/locales/fr';

//el segundo parametro es opcional 
registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarpassPipe } from './pipes/ocultarpass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    OcultarpassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
