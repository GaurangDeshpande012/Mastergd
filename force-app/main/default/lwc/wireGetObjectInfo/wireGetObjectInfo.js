import { LightningElement , wire, track } from 'lwc';

import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class WireGetObjectInfo extends LightningElement {
    objectApiNameInputValue = 'sobject';
    objectApiName;
    @track objectInfo;

    fieldApiNameInputValue;
    fieldApiName;

    childRelationshipApiNameInputValue;
    childRelationShipApiName;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo;

    childRelationNameChange(event) {
        this.childRelationshipApiNameInputValue = event.target.value;
    }

    handleChildRelationBtnClick() {
        this.childRelationShipApiName = this.childRelationshipApiNameInputValue;
    }

    objectNameChange(event) {
        this.objectApiNameInputValue = event.target.value;
    }

    handleBtnClick() {
        this.objectApiName = this.objectApiNameInputValue;
    }

    fieldNameChange(event) {
        this.fieldApiNameInputValue = event.target.value;
    }
    handleFieldBtnClick() {
        this.fieldApiName = this.fieldApiNameInputValue;
    }

    get fieldOptions() {
        let fieldList = [];
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                        fieldList.push({
                            label: Object.entries(this.objectInfo.data.fields)[i][0],
                            value: Object.entries(this.objectInfo.data.fields)[i][0]
                        });
                    }
                }
            }
        }
        return fieldList;
    }
    get childOptions() {
        var childRelationship = [];
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.childRelationships) {
                    for (var i = 0; i < this.objectInfo.data.childRelationships.length; i++) {
                        childRelationship.push({
                            label: this.objectInfo.data.childRelationships[i].childObjectApiName,
                            value: this.objectInfo.data.childRelationships[i].childObjectApiName
                        });
                    }
                }
            }
        }
        return childRelationship;
    }

    get childRelationshipInformation() {
        let childRelationInfo;
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < this.objectInfo.data.childRelationships.length; i++) {
                        if (this.objectInfo.data.childRelationships[i].childObjectApiName === this.childRelationShipApiName) {
                            childRelationInfo = this.objectInfo.data.childRelationships[i];
                            break;
                        }
                    }
                }
            }
        }
        return childRelationInfo
            ? JSON.stringify(childRelationInfo, null, 2)
            : '';
    }

    get fieldInformation() {
        let fieldInfo;
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                        if (Object.entries(this.objectInfo.data.fields)[i][0] === this.fieldApiName) {
                            fieldInfo = Object.entries(this.objectInfo.data.fields)[i][1];
                            break;
                        }
                    }
                }
            }
        }
        return fieldInfo
            ? JSON.stringify(fieldInfo, null, 2)
            : '';
    }

    get ObjectkeyPrefix() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.keyPrefix) {
                    return this.objectInfo.data.keyPrefix;
                }
            }
        }
        return null;
    }

    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }
    get numberOfChildRelationship() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.childRelationships) {
                    return this.objectInfo.data.childRelationships.length;
                }
            }
        }
        return null;
    }

    get numberOfFileds() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    return Object.keys(this.objectInfo.data.fields).length;
                }
            }
        }
        return null;
    }

    get numberOfRecordTypes() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.recordTypeInfos) {
                    return Object.keys(this.objectInfo.data.recordTypeInfos).length;
                }
            }
        }
        return null;
    }

    get isUpdateable() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                return this.objectInfo.data.updateable;
            }
        }
        return null;
    }

    get isQueryable() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                return this.objectInfo.data.queryable;
            }
        }
        return null;
    }

    get isSearchable() {
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                return this.objectInfo.data.searchable;
            }
        }
        return null;
    }

    get totalUpdateableField() {
        let count = 0;
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                        if (Object.entries(this.objectInfo.data.fields)[i][1].updateable === true) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }

    get totalCustomField() {
        let count = 0;
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                        if (Object.entries(this.objectInfo.data.fields)[i][1].custom === true) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }

    countNumberOfField(fieldType) {
        let count = 0;
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    for (var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++) {
                        if (Object.entries(this.objectInfo.data.fields)[i][1].dataType === fieldType) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }

    get totalIntegerFields() {
        return this.countNumberOfField('Int');
    }

    get totalDateTimeFields() {
        return this.countNumberOfField('DateTime');
    }

    get totalTextAreaFields() {
        return this.countNumberOfField('TextArea');
    }

    get totalAddressFields() {
        return this.countNumberOfField('Address');
    }

    get totalDoubleField() {
        return this.countNumberOfField('Double');
    }

    get totalCurrencyField() {
        return this.countNumberOfField('Currency');
    }

    get totalPicklistField() {
        return this.countNumberOfField('Picklist');
    }

    get totalReferenceField() {
        return this.countNumberOfField('Reference');
    }

    get totalStringField() {
        return this.countNumberOfField('String');
    }

    get totalStandardField() {
        return parseInt(this.numberOfFileds) - parseInt(this.totalCustomField);
    }
}
