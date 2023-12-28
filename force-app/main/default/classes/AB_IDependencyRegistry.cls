/**
 * @Description : The golbal dependency registry.
 */
public interface AB_IDependencyRegistry {
   /**
     * @Description : This method checks dependency is registered.
     * 
     * @param dependencyKey dependency Key
     * 
     * @return      is Contains
     */
    Boolean isDependencyRegistered(String dependencyKey);

    /**
     * @Description : This method gets dependency by dependency key
     * 
     * @param dependencyKey dependency Key
     * 
     * @return      dependency object
     */
    Object getDependency(String dependencyKey);

    /**
     * @Description : This method registers dependency.
     * 
     * @param dependencyKey dependency Key
     * @param dependency dependency object
     * @return      void
     */
    void registerDependency(String dependencyKey, object dependency);
}