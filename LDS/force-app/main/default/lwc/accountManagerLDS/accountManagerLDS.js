import { LightningElement,track } from 'lwc';
import { createRecord} from "lightning/uiRecordApi"
export default class AccountManagerLDS extends LightningElement {
@track accountName;
@track accountPhone;
@track accountWebsite;
    accountNameChangeHandler( event)
    {
     this.accountName=event.target.value;
    }
    accountPhoneChangeHandler()
    {
        this.accountPhone=event.target.value;

    }
accountWebsitehangeHandler(event)
{
    this.accountWebsite=event.target.value;

}
createAccount()
{
 const fields ={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite}
 const recordInput ={apiName:'Account',fields}
 createRecord(recordInput).then(response=>{ 
console.log('Account Has been created:',response.id);

 }).catch(error=>{
    console.log('Error occured creating account:',error.body.message);

 });
}


}