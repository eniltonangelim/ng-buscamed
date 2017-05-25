// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const dropdownMenu =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
 
        // end state styles for route container (host)
        state('*', style({
        })),
 
        // route 'enter' transition
        transition(':enter', [
 
            // styles at start of transition
            style({
            }),
 
            // animation and styles at end of transition
            //animate('.3s ease-in-out', style({
            animate('.5s visible', style({
            }))
        ]),
 
        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s hidden', style({
            }))
        ])
    ]);