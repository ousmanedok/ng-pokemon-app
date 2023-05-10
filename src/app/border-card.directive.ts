import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  
  constructor(private el: ElementRef) {
    this.setBoard('#f5f5f5');
    this.setHeight(180)
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.setBoard('#009688');
   }

   @HostListener('mouseleave') onMouseLeave(){
       this.setBoard('#f5f5f5');
    }

  
  setBoard(color: string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

}
