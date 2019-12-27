
import { style } from '@angular/animations';

export const slideOutLeft = [
  style({opacity: 1, offset: 0}),
  style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0.8}),
];

export const slideOutRight = [
  style({opacity: 1, transform: 'translate3d(-100%, 0, 0)', offset: 0.8}),
  style({opacity: 0, offset: 0}),
];
