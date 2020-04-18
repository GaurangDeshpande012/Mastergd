import { LightningElement,track } from 'lwc';

export default class ConditionalRenderingElement extends LightningElement {

  @track displayDiv=false;
@track cityList=['Pune','Mumbai','Nagpur','Amravati' ];
ShowDivHandler(event)
{

  this.displayDiv=  event.target.checked;
}


}