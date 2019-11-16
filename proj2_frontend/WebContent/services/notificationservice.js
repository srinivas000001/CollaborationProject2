/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
	
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8081/proj2_middleware/getnotifications");
	}
	
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8081/proj2_middleware/getnotification/"+id);
	}
	
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8081/proj2_middleware/updatenotification/"+id);
	}
	
	return notificationService;
})