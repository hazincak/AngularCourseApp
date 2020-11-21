import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPlaceholder]',


})
//VieContainerRef gives access to the location where appPlaceholder selector sits in the DOM
export class PlaceholderDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}