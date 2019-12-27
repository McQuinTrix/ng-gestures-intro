import { Component } from '@angular/core';
import {GestureIntroItem, Gestures} from '../../../gestures-intro/src/lib/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestures-intro-test';
  introSet = [
    new GestureIntroItem({
      type: Gestures.TAP,
      text: 'Tap to know more'
    }),
    new GestureIntroItem({
      type: Gestures.FLICK,
      text: 'Flick to know more'
    }),
    new GestureIntroItem({
      type: Gestures.SPREAD,
      text: 'Spread to know more'
    })
  ];
}
