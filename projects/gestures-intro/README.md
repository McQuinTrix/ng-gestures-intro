# Gestures Intro 

An Angular Library to show users instructions with hand gestures images while introducing the app/feature.

## Why use this ?

So we can show users how to interact with website efficiently and how they can get most out of it ! Also this library is very generic and easy to use so you don;t have to start from scratch in making introduction to website.

## How to use this ?

Gestures intro can be used in following way:

`*.module.ts`

```typescript
import { GesturesIntroModule } from 'ng-gestures-intro';

@NgModule({
  ...
  imports: [
    ...
    GesturesIntroModule
    ...
  ]
  ...
})

```

Declare an array which can be used to show instructions in component file.

`*.component.ts`

```typescript
import {GestureIntroItem, Gestures} from 'ng-gestures-intro';

export class SomeComponent{
  
  introSet: GestureIntroItem[] = [
    
    // Each new GestureIntroItem adds a new card 
    // type : specifies the action which used to show image
    // text : which will be shown below the image
   
    new GestureIntroItem({
      type: Gestures.FLICK,
      text: 'Flick the post (from right to left) to hide it (forever)'
    }),
    new GestureIntroItem({
      type: Gestures.DOUBLE_TAP,
      text: 'Double Tap on a post to open comments.'
    }),
  ];
  
  ...
  ...
}
```

Add the component `<gestures-intro>` in the HTML template.

`*.component.html`

```html
...

<gestures-intro [introSet]="introSet">
</gestures-intro>

...
```

## Gestures Types Available Right Now in Gestures enum

```typescript
NONE,
TAP,
DOUBLE_TAP,
DRAG,
FLICK,
PINCH,
SPREAD
```

## Events

### close
The popup will emit this event when it is closed. Can be used to see when user closes it and hide it forever.


[Gesture Image Credits](https://static.lukew.com/TouchGestureCards.pdf) 
