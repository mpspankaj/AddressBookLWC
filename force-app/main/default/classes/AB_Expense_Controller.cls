public with sharing class AB_Expense_Controller {
    private static AB_IExpenseSelector expenseSelector = AB_Dependency.selectorContainer.GetExpenseSelector();

    public AB_Expense_Controller(AB_IExpenseSelector IExpenseSelector) {
        expenseSelector = IExpenseSelector;
    }

    /**
     * @Description : This method is used to get All expenses
     * 
     * @return       List of expense    
     */
    @Auraenabled(cacheable=true)
    public static AB_ActionResponse_Wrapper getAllExpense() {
        AB_ActionResponse_Wrapper response;
        try {
            response = new AB_ActionResponse_Wrapper(true, expenseSelector.getAllExpense(), null);
        } catch (Exception ex) {
            response = new AB_ActionResponse_Wrapper(true, null, ex.getMessage());
        }
        return response;
    }
}