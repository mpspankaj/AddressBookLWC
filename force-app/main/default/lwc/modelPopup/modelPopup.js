import { LightningElement,api } from 'lwc';

export default class ModelPopup extends LightningElement {
    @api openmodel = false;
    @api selectedExpense;

    closeModal() {
        this.dispatchEvent(new CustomEvent("closemodel",{detail: 'No' }));
        //this.openmodel = false
    } 
    deleteRecord() {
        this.dispatchEvent(new CustomEvent("closemodel",{detail: 'Yes' }));
    }
}