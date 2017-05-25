// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
 
        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            left: 0,
            right: 50,
        })),
 
        // route 'enter' transition
        transition(':enter', [
 
            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',
 
                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),
 
            // animation and styles at end of transition
            //animate('.3s ease-in-out', style({
            animate('.5s fly right', style({
            }))
        ]),
 
        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s fly left', style({
            }))
        ])
    ]);