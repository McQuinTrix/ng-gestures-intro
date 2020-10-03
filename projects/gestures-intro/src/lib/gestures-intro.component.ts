import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { GestureIntroItem } from './model';
import * as Hammer from 'hammerjs';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'gestures-intro',
  templateUrl: './gestures-intro.component.html',
  styleUrls: ['gestures-intro.component.scss'],
  animations: [
    trigger('cardAnimator', [
      state('slideOutLeft', style({opacity: 1})),
      state('slideOutRight', style({opacity: 1})),
      transition('* => slideOutLeft', animate(500, keyframes([
        style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0.8}),
      ]))),
      transition('* => slideOutRight', animate(500, keyframes([
        style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0.8})
      ])))
    ])
  ]
})
export class GesturesIntroComponent implements OnInit {
  @Input() introSet: GestureIntroItem[] = [];
  @Output() close = new EventEmitter();
  activeItem = 0;
  animationState = '';
  Hammer = Hammer;
  private _isActive = true;
  get isActive() {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }

  @HostListener('document:keydown.escape', ['$event']) onEscape(event: KeyboardEvent) {
    this.isActive = false;
    this.close.emit();
  }
  @HostListener('document:keydown', ['$event']) onKeyDown($event: KeyboardEvent) {
    switch ($event.keyCode) {
      // Arrow Right
      case 39:
        this.changeCommentIndex('left');
        break;
      // Arrow Left
      case 37:
        this.changeCommentIndex('right');
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility() {
    // this.isActive = !this.isActive;
  }

  changeCommentIndex(type: ('left' | 'right')) {
    if (type === 'left') {
      if (this.introSet.length - 1 > this.activeItem) {
        this.activeItem++;
        this.animationState = 'slideOutLeft';
      }

    } else if (type === 'right') {
      if (this.activeItem > 0) {
        this.activeItem--;
        this.animationState = 'slideOutRight';
      }
    }
  }

  onSwipe($event) {
    switch ($event.direction) {
      case Hammer.DIRECTION_LEFT:
        this.changeCommentIndex('left');
        break;
      case Hammer.DIRECTION_RIGHT:
        this.changeCommentIndex('right');
        break;
      case Hammer.DIRECTION_DOWN:
      case Hammer.DIRECTION_UP:
        return;
        break;
    }
  }

}
