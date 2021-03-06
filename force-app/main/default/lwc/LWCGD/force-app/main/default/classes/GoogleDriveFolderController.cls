public with sharing class GoogleDriveFolderController {
    
    @AuraEnabled(cacheable=true)
    public static  init(Id recordId, String folderField){

        String sobjectType = recordId.getSobjectType().getDescribe().getName();
        if(folderField == null){
            folderField = GoogleDrive.getObjectMetadata(sobjectType).FieldAPI_NameWithFolderId__c;
        }
        String queryString = 'SELECT Id, ' + folderField + ' FROM  ' + sobjectType + ' WHERE Id=:recordId';
        Sobject result = Database.query(queryString);

        String folderId = String.valueof(result.get(folderField));
        GoogleDriveApi_FolderFilesResult res = getFolderContent(folderId);
        res.folderId = folderId;
        return res;
    }

    @AuraEnabled(cacheable=true)
    public static  getFolderContent(String folderId){
        
        return GoogleDrive.getFolderFiles(folderId);

    }

    @AuraEnabled(cacheable=true)
    public static  doSearch(String folderId, String searchTerm){
        String encoded = EncodingUtil.urlEncode(searchTerm, 'UTF-8');
        String search = '\'' + folderId + '\'+in+parents+and+name+contains+\'' + searchTerm+ '\'';
        
        return GoogleDrive.search(searchTerm);

    }
}