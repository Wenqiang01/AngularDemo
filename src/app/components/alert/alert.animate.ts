import { trigger, state, animate, transition, style } from '@angular/animations';
export const fadeInOut =
    trigger('fadeInOut', [
        state('in', style({
            transform: 'translateX(-200%)'  
        })),
        state('out', style({
            transform: 'translateX(0%)'
        })),
        transition('in <=> out', animate('500ms ease-in-out'))
    ]);