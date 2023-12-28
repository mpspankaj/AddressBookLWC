/**
 * @Description : Resolving selector dependencies by storing the instances in heap memory.
 */
public with sharing class AB_SelectorDependency {
    private AB_DependencyRegisty registry;

    /**
     * @Description : Constructor
     * 
     * @param registry      registry object
     */
    public AB_SelectorDependency(AB_DependencyRegisty registry) {
        this.registry = registry;
    }

    /**
     * @Description : Constructor
     * 
     * @return AB_IExpenseSelector   instance of AB_IExpenseSelector
     */
    public AB_IExpenseSelector GetExpenseSelector() {
        String dependencyKey = AB_ExpenseSelector.class.getName();
        if(registry.isDependencyRegistered(dependencyKey)) {
            return (AB_IExpenseSelector) registry.getDependency(dependencyKey);
        }

        AB_IExpenseSelector dependency = new AB_ExpenseSelector();
        registry.registerDependency(dependencyKey, dependency);

        retruen dependency;
    }
}