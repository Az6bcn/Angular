# Directives --> To modify the Dom

# *ngFor    *ngIf     *ngClass    *ngStyle    *Custom Directive     *ngSwitchCase

# ngIf:

To Hide/Show part of a page (DOM Element == HTML Element)ngFor depending on some condition.
Angular 4 has the if & else approach.  (The DOM Object is removed from the DOM)

# Hidden attribute:

[Hidden] to hide part of a page as well. (The DOM Object is present in the DOM but not rendered)

# ngFor:

To render a list of Objects/ an Array/ a List.
ngFor has exported values like index, Even etc (www.angular.io , search ngForOf , they re under the Local Variables)

# ngClass:

To render a css class among the Objects of CSS Classes based on some condition. 
use intead of Class binding.



# ngStyle:

To render a css style among the Objects of CSS Styles based on some condition. 
use intead of Style binding.

# Custom Directive: To modify DOM Object of the HOST this directive is applied on.

# ElementRef:
Angular injects an instance of ElementRef in the constructor of our Directive, to get direct access to the DOM Element upon which it's applied (Host Element).
We can accessit's property via # nativeElement property.
 constructor (private el: ElementRef){
 }

# HostListener: 
To subscribe to the Event raised from the DOM element this Directive is applied on.
@HostListener('NameOfDOMEvent') onFocus(){}
HostListener() takes an 'DOMEventName' as an argument. When that event gets fired on the HOST element its calls the associated method.




