public with sharing class objectCount {
    
    @AuraEnabled
    public static void CalculateObjectCount(){
        map<string,Integer> newmap = new map<string,Integer>();
            for(HistoryTracker__b obj :[select id,Object_Name__c,Parent_Id__c,SF_ID__c,Modified_Date__c,GUID__c from HistoryTracker__b])
             {

                Date myDate = System.Today().AddDays(Integer.valueOf(Modified_Date__c));
                    System.debug('myDate',myDate);
                    if(obj.Modified_Date__c == Today){
                    Integer count =0;
                    if(newmap.containskey(Object_Name__c)){
                    count++;
                    newmap.put(obj.Object_Name__c,count)
                    }else{
                    newmap.put(obj.Object_Name__c => count)
                    }
                 }
            }



    }
 





}
