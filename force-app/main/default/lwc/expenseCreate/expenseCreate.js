import { LightningElement } from 'lwc';
import EXPENSE_OBJECT from '@salesforce/schema/Expense__c';

export default class ExpenseCreate extends LightningElement {
    expenseObject = EXPENSE_OBJECT;
    fields = ['SNo__c', 'Date__c','Name','Expense_Group__c','Amount__c','Payment_Mode__c','Remark__c'];

    handleExpenseCreated(){
        this.dispatchEvent(new CustomEvent('recordaction'));
    }
}