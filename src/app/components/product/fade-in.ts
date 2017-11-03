import { trigger, state, animate, transition, style } from "@angular/animations";
export const FadeIn =
    trigger('FadeIn', [
        transition(':enter', [
            style({ Opacity: 0 }),
            animate('.3s', style({ Opacity: 1 }))
        ])
    ]);

export const FadeOut =
    trigger('FadeOut', [
        state('stay', style({
            //display: 'block'
        })),
        state('leave', style({
            transform: 'translateX(-100%)'  
        })),
        transition('stay => leave', animate('500ms ease-in-out'))
    ]);    