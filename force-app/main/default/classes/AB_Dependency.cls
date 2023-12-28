public with sharing class AB_Dependency {
    public static AB_IDependencyRegistry registry = new AB_DependencyRegistry();

    public  static AB_ISelectorContainer selectorContainer = new AB_SelectorContainer(registry);
}