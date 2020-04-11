import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
 @track dyanamicGreeting='To Salesforce';

 greetingchangehandler(event)
 {

this.dyanamicGreeting=event.target.value

 }

}