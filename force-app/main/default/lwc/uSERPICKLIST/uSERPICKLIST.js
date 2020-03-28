/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { LightningElement,api ,wire,track} from 'lwc';
import userupdate from '@salesforce/apex/Whj_userpicklist.userupdate';
import userreload from '@salesforce/apex/Whj_userpicklist.userreload';
import { getRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import STATUS_FIELD from '@salesforce/schema/User.Status__c';
import available from '@salesforce/resourceUrl/PicklistImage1';
import Busy from '@salesforce/resourceUrl/PicklistImage2';
import Offline from '@salesforce/resourceUrl/PicklistImage3';



export default class ComboboxBasic extends LightningElement {
    @api Status = 'inProgress';
    @api recordId;
    @track picurl;
    @track status;

    @wire(getPicklistValues, {recordTypeId: '012000000000000AAA',fieldApiName: STATUS_FIELD })
    statusValues;
    statusValue="";

    handleChange(event) {
        //alert("hello")
        //alert("hello")

        this.statusValue = event.target.value;
        //alert(this.statusValue);
        userupdate({selectstatus:this.statusValue})
        //userreload({})
        console.log(this.Status);

        if(this.statusValue === 'Busy'){
            //alert(this.statusValue);
            this.picurl = Busy;
        }
        if(this.statusValue === 'Available'){
            //alert(this.statusValue);
            this.picurl = available;
        }
        if(this.statusValue === 'Offline'){
            //alert(this.statusValue);
            this.picurl = Offline;
        }
        
    }

   connectedCallback() {
   //alert("hello")
        userreload()
         .then(result =>{
        this.status = result;
        console.log(result);
         
        if(this.status === 'Busy'){
            //alert(this.statusValue);
            this.picurl = Busy;
        }
        if(this.status === 'Available'){
            //alert(this.statusValue);
            this.picurl = available;
        }
        if(this.status === 'Offline'){
            //alert(this.statusValue);
            this.picurl = Offline;
        }
    })
    




         }
         

        
            
}

    /*(event){
    console.log("status"+this.Status);
    userupdate({selectstatus:this.Status})
        //this.value= event.detail.value;
       /*  @wire(getRecord, { recordId: '$recordId', fields: ['User.Status__c'] })
        record;  */
   // }

