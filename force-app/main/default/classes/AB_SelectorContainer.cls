/**
 * @Description : Resolving selector dependencies by storing the instances in heap memory.
 */
public with sharing class AB_SelectorContainer implements AB_ISelectorContainer{
    private AB_IDependencyRegistry registry;

    /**
     * @Description : Constructor
     * 
     * @param registry      registry object
     */
    public AB_SelectorContainer(AB_IDependencyRegistry registry) {
        this.registry = registry;
    }

    /**
     * @Description : Constructor
     * 
     * @return AB_ISelectorContainer   instance of AB_ISelectorContainer
     */
    public AB_IExpenseSelector GetExpenseSelector() {
        String dependencyKey = AB_ExpenseSelector.class.getName();
        if(registry.isDependencyRegistered(dependencyKey)) {
            return (AB_IExpenseSelector) registry.getDependency(dependencyKey);
        }

        AB_IExpenseSelector dependency = new AB_ExpenseSelector();
        registry.registerDependency(dependencyKey, dependency);

        return dependency;
    }
}