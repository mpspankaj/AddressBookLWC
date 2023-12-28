/**
 * @Description : Wrapper for all function return data.
 */
public with sharing class AB_ActionResponse_Wrapper {
    @AuraEnabled public Boolean success;
    @AuraEnabled public string errorMessage;
    @AuraEnabled public Object data;

    public AB_ActionResponse_Wrapper(Boolean success, Object data, string errorMessage){
        this.success = success;
        this.data = data;
        this.errorMessage = errorMessage;
    }
}