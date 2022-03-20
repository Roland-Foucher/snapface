import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// choisir langue
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [AppComponent, FaceSnapComponent],
  imports: [BrowserModule],
  providers: [
    // default application en fr pour date par exemple - changer fr-FR pour autre langues
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // default application fr
    registerLocaleData(fr.default);
  }
}
