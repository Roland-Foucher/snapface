import { CommonModule, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorProviders } from './interceptors';
// choisir langue
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    // default application en fr pour date par exemple - changer fr-FR pour autre langues
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders,
  ],
})
export class CoreModule {
  constructor() {
    // default application fr
    registerLocaleData(fr.default);
  }
}
