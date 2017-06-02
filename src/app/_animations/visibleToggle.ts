import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const visibleToggle =
    trigger('visibleToggle', [
      state('hidden', style({
        display: 'none',
      })),
      state('visible',   style({
        display: 'block',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])