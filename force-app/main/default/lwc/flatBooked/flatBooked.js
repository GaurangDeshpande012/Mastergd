/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { LightningElement ,track,api,wire} from 'lwc';
import Lead from '@salesforce/schema/Lead';
import Preference1__c from '@salesforce/schema/Lead.Preference1__c';
import Phone from '@salesforce/schema/Lead.Phone';
import Email from '@salesforce/schema/Lead.Email';
import  FirstName from '@salesforce/schema/Lead.FirstName';
 import LastName from '@salesforce/schema/Lead.LastName';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Preference1__c_FIELD from '@salesforce/schema/Lead.Preference1__c';



export default class FlatBooked extends LightningElement 

{ 
    
    FirstName="";
    LastName="";
    Phone="";
    Email="";
    Preference1__c="";

   // @track value = 'Preference1__c';
    //@api Status = 'inProgress';
    
 @wire(getPicklistValues, {recordTypeId: '012000000000000AAA',fieldApiName: Preference1__c_FIELD })
    statusValues;
    statusValue="";
    
/*
    get options() {
        return [
            { label: '2BHK', value: '2BHK' },
            { label: '3BHK', value: '3BHK' },
            { label: '4BHK', value: '4BHK' },
        ];
    }*/

    handleChange(event) {
        this.value = event.detail.value;
    }
    
    createrecord(event)
    {
     /*this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Lead created',
                variant: 'success'
            })
        );*/
       
        const evt = new ShowToastEvent({
            title: 'Successfully',
            message: 'Lead created Successfully ',  
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);



    }
   
    
    handleClick(){
    //alert("Hi Salesforce");
        this.dispatchEvent(new CustomEvent('submitforflatbook'));
       // console.log('Working');
    }

}






