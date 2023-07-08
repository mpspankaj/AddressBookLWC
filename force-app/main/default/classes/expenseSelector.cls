public with sharing class expenseSelector {
    @Auraenabled(cacheable=true)
    public static List<Expense__c> getAllExpense() {
        return [select Id,Date__c, Name,Expense_Group__c,Amount__c,Payment_Mode__c,Remark__c from Expense__c order by SNo__c];
    }
    //TEst commit 1
}
