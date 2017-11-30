import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { routing } from './lazyRouting';

@NgModule({
    imports: [routing],
    declarations: [LazyComponent]
})
export class LazyModule { };
