import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: `[pkmBorderCard]`
})
export class BorderCardDirective {

  //DONT WORK

  constructor(private el : ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5')
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setHeight(height : number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color : string){
    this.el.nativeElement.style.border = `solid 4x ${color} `
  }

}
