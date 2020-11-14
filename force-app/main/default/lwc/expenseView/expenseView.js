import { LightningElement,api } from 'lwc';
import EXPENSE_OBJECT from '@salesforce/schema/Expense__c';

export default class ExpenseView extends LightningElement {
    @api recordId;
    expenseObject = EXPENSE_OBJECT;

    clickOK(event){
        this.dispatchEvent(new CustomEvent('closeview'));
    }
}