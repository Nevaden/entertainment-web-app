import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopProagation]'
})
export class StopProagationDirective {

  constructor() { }
  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
      event.stopPropagation();
  }
}



  