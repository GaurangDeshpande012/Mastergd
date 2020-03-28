public with sharing class Whj_userpicklist {
  @AuraEnabled()
    public static void userupdate(string selectstatus)
    {
        system.debug(selectstatus);
       User uobj =[select id,Status__c from user where id=:UserInfo.getUserId()];
        uobj.Status__c=selectstatus;
        update  uobj;
        system.debug(uobj);
    }
@AuraEnabled()       
public static string userreload()
{
 User us =[select id,Status__c from user where id=:UserInfo.getUserId()];
 string userr = us.Status__c;
return userr;
}
}
