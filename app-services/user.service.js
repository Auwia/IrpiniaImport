(function () {
    'use strict';

    angular
        .module('appLog')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('https://weinzuhause.altervista.org/ws/getAll.php').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('https://weinzuhause.altervista.org/ws/???????' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('https://weinzuhause.altervista.org/ws/GetByUsername.php?username=' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
		
        function Create(user) {
			return $http.put('https://weinzuhause.altervista.org/ws/signup.php', user).then(handleSuccess, handleError);
        }

        function Update(user) {
            return $http.put('https://weinzuhause.altervista.org/ws/update.php?username=' + user.email, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(username) {
            return $http.delete('https://weinzuhause.altervista.org/ws/delete.php?username=' + username).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
			return { success: true, message: res };
        }

        function handleError(error) {
			if (angular.isString(error)) {
				return function () {
					return { success: false, message: error };
				};
			} else {
				switch (error.data.errno) {
					case 1062:
						var msg = "email address already registered";
						break;
				}				
				return { success: false, message: msg }
			}
        }
    }

})();