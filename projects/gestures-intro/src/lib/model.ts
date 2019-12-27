export enum Gestures {
  NONE,
  TAP,
  DOUBLE_TAP,
  DRAG,
  FLICK,
  PINCH,
  SPREAD,

  PRESS,
  PRESS_TAP,
  PRESS_DRAG_SIDE,
  PRESS_DRAG_VERTICAL,
  ROTATE_TWO_FINGERS,
  PRESS_ROTATE,
  ROTATE,
}


export class GestureIntroItem {
  type: Gestures;
  text: string;
  gestureClass ? = '';
  constructor(props?: GestureIntroItem) {
    if (props) {
      Object.assign(this, props);
      this.setTypeClass();
    }
  }

  private setTypeClass ? = () => {
    switch (this.type) {
      case Gestures.TAP:
        this.gestureClass = 'gi-gesture-tap';
        break;
      case Gestures.DOUBLE_TAP:
        this.gestureClass = 'gi-gesture-double-tap';
        break;
      case Gestures.DRAG:
        this.gestureClass = 'gi-gesture-drag';
        break;
      case Gestures.FLICK:
        this.gestureClass = 'gi-gesture-flick';
        break;
      case Gestures.PINCH:
        this.gestureClass = 'gi-gesture-pinch';
        break;
      case Gestures.SPREAD:
        this.gestureClass = 'gi-gesture-spread';
        break;
    }
  }
}
