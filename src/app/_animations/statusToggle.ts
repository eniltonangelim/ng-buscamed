import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const statusToggle =
    trigger('statusToggle', [
      state('inactive', style({
        transform: 'scale(0.9)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])