/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/proj2_middleware/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8081/proj2_middleware/login",user)
	}
	
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/proj2_middleware/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8081/proj2_middleware/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8081/proj2_middleware/updateuser",user)
	}
	
	
	return userService
})