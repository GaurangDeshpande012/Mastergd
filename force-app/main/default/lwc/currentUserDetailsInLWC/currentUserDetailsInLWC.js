import { LightningElement,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id'; 


export default class CurrentUserDetailsInLWC extends LightningElement {


    @track objUser = {};
    
    @wire(getRecord, { recordId: USER_ID, fields: ['User.FirstName', 'User.LastName', 'User.Name', 'User.Alias', 'User.IsActive'] })
    userData({error, data}) {
        if(data) {
            window.console.log('data ====> '+JSON.stringify(data));

            let objCurrentData = data.fields;

            this.objUser = {
                FirstName : objCurrentData.FirstName.value,
                LastName : objCurrentData.LastName.value,
                Name : objCurrentData.Name.value,
                Alias : objCurrentData.Alias.value,
                IsActive : objCurrentData.IsActive.value,
            }
        } 
        else if(error) {
            window.console.log('error ====> '+JSON.stringify(error))
        } 
    }

}
