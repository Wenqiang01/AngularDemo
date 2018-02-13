import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core/src/metadata/directives';

@Directive({
    selector: '[appConfrim]'
})
export class ConfrimDriective {
    @HostListener('click', ['$event'])
    confrimFunction(){
        
    }
}


