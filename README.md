
# AngularDataBinding

# Data Binding


                      #DOM                                                                  COMPONENT
Interpolation{{}}             <------------{{attribute in component class}}---------------------------

Property Binding [ ]          <------[property e.g img [src]] = "value/attribute in component"-------

Event Binding ( )             -------(event e.g Click) = "value/attribute in component"-------------->

2Way Binding [( )]            <------[( ngModel )] = "attribute in component"------------------------>

# DOM

DOM is a model of Object that represents the struture of a document. It is a tree in memory.

HTML is a llllllanguage that is uses to represent DOM Objects and properties in text.


*Most attributes (properties) of HTML Elements have a one to one mapping to DOM Objects.

# Property Binding binds to the property of a DOM Object.
# Event Binding is use to handle event raised from the DOM e.g Clicks, Mouse Movementsetc
# 2Way Binding : 
 -import ngModel into imports: [] in our module.ts file from FormsModule. 
 import { FormsModule }from '@angular/forms';
 import:[,FormsModule]


# Class and Style Binding

Classs binding is use to add additional Bootstrap classes to an element on some conditions

Style binding is use to bind to a property of the sytle DOM Object.



# PIPES

Pipes is use to format data.

Built in PIPES:

*Uppercase  *Lowercase  *Date  *Decimal(number) *Currency  *Percent

# Custom pipes should be Registered in declarations[ ] in our module.ts

***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
