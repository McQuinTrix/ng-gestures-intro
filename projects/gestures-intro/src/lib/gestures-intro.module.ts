import { NgModule } from '@angular/core';
import { GesturesIntroComponent } from './gestures-intro.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [GesturesIntroComponent],
  exports: [GesturesIntroComponent]
})
export class GesturesIntroModule { }
