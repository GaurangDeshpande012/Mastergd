public with sharing class CovidAPIController {

    @AuraEnabled(cacheable=true)
    public static List<Countries> getCovidData() {
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://api.covid19api.com/summary');
        req.setTimeout(60*1000);

        Http h = new Http();
        String resp;
        HttpResponse res = h.send(req);
        if(res.getStatusCode() < 299) {
            resp = res.getBody();
            CovidWrapper CoWrap = (CovidWrapper) System.JSON.deserialize(resp, CovidWrapper.class);
            List<Countries> coList = new List<Countries>();
            for(Countries co : CoWrap.Countries)
                if(String.isNotBlank(co.Country) && co.TotalConfirmed > 0)
                    coList.add(co);
            return coList;
        }
        return new List<Countries>();
    }

    public class CovidWrapper {

        public List<Countries> Countries;
        public String currDate;
    }

    public class Countries {
        @AuraEnabled
        public String Country;
        @AuraEnabled
        public String CountrySlug;
        @AuraEnabled
        public Integer NewConfirmed;
        @AuraEnabled
        public Integer TotalConfirmed;
        @AuraEnabled
        public Integer NewDeaths;
        @AuraEnabled
        public Integer TotalDeaths;
        @AuraEnabled
        public Integer NewRecovered;
        @AuraEnabled
        public Integer TotalRecovered;
    }
}
