import {
    LightningElement
} from 'lwc';
import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';
export default class Notification extends LightningElement {
    showErrorToast() {
            const evt = new ShowToastEvent({
                title: 'Application Error',
                message: 'Something went wrong ',
                variant: 'error',
                mode: 'dismissable'
            });
            this.dispatchEvent(evt);
        }
        showWarningToast() {
            const evt = new ShowToastEvent({
                title: 'Application Warning',
                message: 'Something went wrong ',
                variant: 'warning',
                mode: 'pester'
            });
            this.dispatchEvent(evt);
        }
        showSuccessToast() {
            const evt = new ShowToastEvent({
                title: 'Record Update',
                message: 'Application is loaded ',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(evt);
        }
        showInfoToast() {
            const evt = new ShowToastEvent({
                title: 'Application Info',
                message: 'Please contact System Admin ',
                variant: 'info',
                mode: 'dismissable'
            });
            this.dispatchEvent(evt);
        }
}