import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD, WEBSITE_FIELD,INDUSTRY_FIELD];

    handleAccountCreated(){
        // Run code when account is created.
        const evt = new ShowToastEvent({
            title: 'Successfully',
            message: 'Account created Successfully ',  
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}