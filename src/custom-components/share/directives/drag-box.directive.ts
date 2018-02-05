
import {
    Directive,
    Renderer2,
    HostListener
} from "@angular/core";

@Directive({
    selector: '[drag-box]'
})
export class DragBoxDirective {

    constructor(private rd2: Renderer2) {}
    
    ngOnInit() {}

    ngOnDestroy() {}

    @HostListener('mousedown')    
    mousedown(event: MouseEvent) {
        console.log(this.rd2);
        // if(this.draggable) {
        //     this.dragging = true;
        //     this.lastPageX = event.pageX;
        //     this.lastPageY = event.pageY;
        // }
    }


    @HostListener('mouseup')
    mouseup(event: MouseEvent) {

    }

}