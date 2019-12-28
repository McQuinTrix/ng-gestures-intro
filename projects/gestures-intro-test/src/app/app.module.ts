import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GesturesIntroModule} from 'ng-gestures-intro';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GesturesIntroModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
