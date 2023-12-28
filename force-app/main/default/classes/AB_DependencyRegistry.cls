
public with sharing class AB_DependencyRegistry implements AB_IDependencyRegistry {
    public static Map<String, Object> registry = new Map<String, Object>();

    /**
     * @Description : This method checks dependency is registered.
     * 
     * @param dependencyKey dependency Key
     * 
     * @return      is Contains
     */
    public Boolean isDependencyRegistered(String dependencyKey) {
        return registry.containsKey(dependencyKey);
    }

    /**
     * @Description : This method gets dependency by dependency key
     * 
     * @param dependencyKey dependency Key
     * 
     * @return      dependency object
     */
    public Object getDependency(String dependencyKey) {
        return registry.get(dependencyKey);
    }

    /**
     * @Description : This method registers dependency.
     * 
     * @param dependencyKey dependency Key
     * @param dependency dependency object
     * @return      void
     */
    public void registerDependency(String dependencyKey, object dependency) {
        registry.put(dependencyKey, dependency);
    }
}