public with sharing class AB_ExpenseSelector implements AB_IExpenseSelector{
    /**
     * @Description : This method is used to get All expenses
     * 
     * @return       List of expense    
     */
    public static List<Expense__c> getAllExpense() {
        return [select Id,Date__c,Name,Expense_Group__c,Amount__c,Remarks__c  from Expense__c order by SNo__c];
    }
}
