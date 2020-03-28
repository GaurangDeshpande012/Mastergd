/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { LightningElement } from 'lwc';

export default class SummaryScreen extends LightningElement {


    handleClick12(){
alert("hi Salesforce");
//this.dispatchEvent(new CustomEvent('sendforsummaryscreen'));
        //console.log('Working');

    }

    sendsms()
        {
            alert(" Send from Salesforce");
        }
    



}