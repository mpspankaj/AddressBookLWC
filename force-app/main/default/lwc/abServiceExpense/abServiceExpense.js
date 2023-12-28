import { api } from 'lwc';
import getAllExpense from '@salesforce/apex/AB_Expense_Controller.getAllExpense';

export default class AbServiceExpense {
    @api
    async getExpensesResult() {
        let response = await getAllExpense();

        if(!response.success) {
            throw new Error(response.errorMessage);
        }
        return response.data;
    }
}