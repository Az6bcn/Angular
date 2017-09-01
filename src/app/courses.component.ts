
/*add the 'export' keyword so that angular can see our class
    add a 'decorator' called Component to this class to make it a component
    - 1st import this 'decorator'
    */
// Import Component decorator
import {Component} from '@angular/core';


// Add the Component decorator to the Class
@Component({
    /* selector for this component, --> Any where we use this selector as  element <app-courses>,
                                                angular will render the Template for this component*/
selector: 'app-courses',
    // template for this component --> HTML we want to be rendered for this component (<app-courses> )
template:  '<h2> {{title}} , {{getTitle()}} </h2>'
})

export class CoursesComponent {

/* Remember to!! REGISTER COMPONENT IN MODULE : app.Module.ts*/
title = 'List of Courses';

getTitle() {
    return this.title;
}


}

// just hit CTRL+SPACE and have your code auto-complete!



/* https://medium.com/frontend-coach/7-must-have-visual-studio-code-extensions-for-angular-af9c476147fd*/

/*Installed Extensions:

TSLint : It will draw squiggly lines under the code where you have a problem and display a list of warnings & errors on hovering it.

Auto Import: When working with Angular you’ll often be writing several of those
import { Something } from './somewhere'. This guy will do it automatically for you.
*/
