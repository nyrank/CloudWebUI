angular.module('app').factory('servicePlanVisibilityService', function($http) {
    var servicePlanVisibilityServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getServicePlanVisibility = function(id) {
        var url = API_Endpoint+'/v2/service_plan_visibilities/'+id;

        // http headers                                                                           
                                                                                                 \

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken
        };

        var config = {
            headers: headers
        };

        return $http.get(url, config);
    };

var _getServicePlanVisibilities = function() {
        var url = API_Endpoint+'/v2/service_plan_visibilities';

        // http headers                                                                           
                                                                                                 \

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken
        };

        var config = {
            headers: headers
        };

        return $http.get(url, config);
    };


    servicePlanVisibilityServiceFactory.getServicePlanVisibilities = _getServicePlanVisibilities;
    servicePlanVisibilityServiceFactory.getServicePlanVisibility = _getServicePlanVisibility;

    return servicePlanVisibilityServiceFactory;
});
