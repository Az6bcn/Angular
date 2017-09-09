import { Directive, HostListener, ElementRef, Input } from '@angular/core';

/* Angular will apply this Custom Directive on any component with it's
selector --> appCustomInputFormatDirective */
@Directive({
  selector: '[appCustomInputFormatDirective]'
})



export class CustomInputFormatDirective {
  // Define property option to be used in property binding for our Directive as @Input property
  @Input() format: string;

  value: string;

  /* ElementRef --> gives us direct access to the HOST element, element upon which this Directive
  is applied to*/
  constructor(private el: ElementRef) {
  }

  /* HostListener --> To subscribe to the Event raised from the DOM element
   this Directive is applied to.
  
   **
   HostListener('nameOfEvent') methodAttached(){} --> HostListener takes an
   'Event Name' as an argument, when that event gets fired on the HOST element
    it calls the associated method.
  */

  // @HostListener('focus') onFocus() {
  //       return console.log('onFocus');
  // }

  @HostListener('blur') onBlur() {
    console.log('estoy Dentro');
    // get the value of the Host element in the Host DOM Object through nativeElement
    this.value = this.el.nativeElement.value;

    // Perform logic based on our Directive property passed through property binding
    if (this.format == 'lowerCase') {
      // set this value in the DOM object through nativeElement to UpperCase
      this.el.nativeElement.value = this.value.toLowerCase();
    } else {
      this.el.nativeElement.value = this.value.toUpperCase();
    }
  }
}
