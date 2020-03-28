public with sharing class SaveLeadRecord {
   
  @AuraEnabled
    public static void saveLeadRecord(Lead objld){
        try{
            insert objld;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}

