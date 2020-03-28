import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServiceLWCDemo extends LightningElement (LightningElement) {
    @api recordId;
 // Navigate to New Record Page
 navigateToNewRecordPage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            "recordId": this.recordId,
            "objectApiName": "Account",
            "actionName": "new"
        },
    });
}

// Navigate to Edit Record Page
navigateToEditRecordPage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            "recordId": this.recordId,
            "objectApiName": "Account",
            "actionName": "edit"
        },
    });
}

// Navigate to view Record Page
navigateToViewRecordPage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            "recordId": this.recordId,
            "objectApiName": "Account",
            "actionName": "view"
        },
    });
}

// Navigation to Account Recent List view
navigateAccRecentView() {
    this[NavigationMixin.Navigate]({
        "type": "standard__objectPage",
        "attributes": {
            "objectApiName": "Account",
            "actionName": "list"
        },
        "state": {
            "filterName": "Recent"
        }
    });
}

// Navigation to Related list 
navigateRelatedListView() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordRelationshipPage',
        attributes: {
            recordId: this.recordId,
            objectApiName: 'Account',
            relationshipApiName: 'Contacts',
            actionName: 'view'
        },
    });
}

// Navigation to Account object home page
navigateAccObject() {
    this[NavigationMixin.Navigate]({
        "type": "standard__objectPage",
        "attributes": {
            "objectApiName": "Account",
            "actionName": "home"
        }
    });
}

// Navigation to contant object home page
navigateConObject() {
    this[NavigationMixin.Navigate]({
        "type": "standard__objectPage",
        "attributes": {
            "objectApiName": "Contact",
            "actionName": "home"
        }
    });
}

// Navigation to lightning component
navigateToComponent() {
    this[NavigationMixin.Navigate]({
        "type": "standard__component",
        "attributes": {
            "componentName": "c__flatBooked"    
        }
    });
}

//  // Navigation to normal web page page
navigateToWebPage() {
    this[NavigationMixin.Navigate]({
        "type": "standard__webPage",
        "attributes": {
            "url": "https://www.salesforce.com/"
        }
    });
}

 // Navigation to standard home page
navigateToHomePage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName: 'home'
        },
    });
}

// Navigation to chatter home page
navigateToChatterHome() {
    this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName: 'chatter'
        },
    });
}
}






