import { LightningElement,api } from 'lwc';
import EXPENSE_OBJECT from '@salesforce/schema/Expense__c';

export default class ExpenseEdit extends LightningElement {
    @api recordId='';
    @api action='';
    expenseObject = EXPENSE_OBJECT;

    connectedCallback(event){
        if(this.action == 'Edit'){
            this.action = "Edit Record";
        } else if(this.action == 'New'){
            this.action = "Create New Record";
        }
    }

    get isNew(){
        return this.action == 'New';
    }

    handleSubmit(event) {
        console.log('handleSubmit: '+ event.detail.fields);
    }
    handleSuccess(event) {
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);
        //Fire event on Grand Parent Component.
        //this.dispatchEvent(new CustomEvent("closemodel",{bubbles:true,composed: true, detail: false }));
        this.dispatchEvent(new CustomEvent('recordaction'));
    }
    cancelClick(event){
        this.dispatchEvent(new CustomEvent('recordaction'));
    }
}