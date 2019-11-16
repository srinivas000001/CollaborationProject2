/**
 * 
 */

app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8081/proj2_middleware/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8081/proj2_middleware/addfriend",toId)
	}
	
	friendService.getPendingRequests=function()
	{
		return $http.get("http://localhost:8081/proj2_middleware/pendingrequests");
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8081/proj2_middleware/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8081/proj2_middleware/deleterequest",request);
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8081/proj2_middleware/friends");
	}
	
	
	return friendService;
})