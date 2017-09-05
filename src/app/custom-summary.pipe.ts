// PipeTransform : Interface that defines the shape of all pipes in angular
import { Pipe, PipeTransform } from '@angular/core';

// name: 'summary' ***summary is what we would use when we want to apply this pipe.
@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  // value: what we want to use this custom pipe on e.g {{course.text | summary}} , value == course.text
  // arg? : optional arguments we can supply to our custom pipe
  // change value type to string to get intellisense. *intellisense don't show on Type : any
  transform(value: string, args?: any): any {
    // logic for our pipe
    if (!value) {
      return null;
    }
    else {
      return value.substr(0, 50) + '...';
    }
  }
}
