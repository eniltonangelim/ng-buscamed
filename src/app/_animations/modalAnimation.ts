import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const modalAnimation =
    trigger('dialog', [
        transition('void => *', [
            style({ transform: 'scale3d(.3, .3, .3)' }),
            animate(100)
        ]),
            transition('* => void', [
            animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
        ])
    ])