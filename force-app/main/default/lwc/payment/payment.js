/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { LightningElement ,track} from 'lwc';

export default class Payment extends LightningElement {



    @track value = 'inProgress';

    get options() {
        return [
            { label: 'Online', value: 'Online' },
            { label: 'Cheque', value: 'Cheque' },
            { label: 'Cash', value: 'Cash' },
            { label: 'DD', value: 'DD' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    handleClick1(){
        //alert("Hi Salesforce");
        this.dispatchEvent(new CustomEvent('submitforpayment'));
        //console.log('Working');
    }
   
}

