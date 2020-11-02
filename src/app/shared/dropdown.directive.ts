import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective implements OnInit{
   
    @HostBinding('class.open') toggleDropdown = false;

    ngOnInit(){
        
    }

    @HostListener('click') onClick(){
        this.toggleDropdown = !this.toggleDropdown;
    }

}