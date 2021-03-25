import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    @Input()

    myMatchHeight: string = '';

    constructor(private el: ElementRef) { }

    ngAfterViewChecked() {
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        
        if (!parent) return;

        const children = parent.getElementsByClassName(className);

        if (!children) return;

        Array.from(children).forEach((x: any) => {
            x.style.height = 'initial';
        });

        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height + 40);


        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        Array.from(children)
            .forEach((x: any) => x.style.height = `${maxHeight}px`);
    }



    // @HostListener('window:resize')
    // onResize() {
    //     // call our matchHeight function here
    //     this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    // }
}
