(function () {
    'use strict';

    angular
        .module('appLog', ['ngRoute', 'ngCookies', 'pascalprecht.translate'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$translateProvider'];
    function config($routeProvider, $locationProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
			
		var en_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Register" : "Register",
		  "Signup" : "Signup",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "search" : "Search",
		  "addCart" : "add to cart",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		var it_translations = {
		  "title" : "Irpinia Express Store - Registrazione utente e accesso al contenuto privato",
		  "Login" : "Accedi",
		  "Signup" : "Iscriviti",
		  "Register" : "Registrati",
		  "Help" : "Aiuto",
		  "Item" : "Oggetti",
		  "Price" : "Prezzo",
		  "Quantity" : "Quantità",
		  "Cart" : "Il carrello è vuoto.",
		  "BackStore" : "Indietro al negozio",
		  "ClearCart" : "Svuota carrello",
		  "PayPal" : "Paga con PayPal",
		  "Google" : "Paga con Google",
		  "Stripe" : "Page con Stripe",
		  "items" : "oggetti",
		  "addCart" : "Aggiungi al carrello",
		  "search" : "Cerca",
		  "itemCart" : "l'oggetto è nel carrello",
		  "removeCart" : "rimuovi dal carrello",
		  "hi" : "Ciao",
		  "loggedIn" : "Sei entrato!!",
		  "Picture" : "Immagine",
		  "firstName" : "Nome:",
		  "lastName" : "Cognome:",
		  "street" : "Via/n°:",
		  "ort" : "CAP:",
		  "place" : "Comune:",
		  "telephone" : "Telefono:",
		  "email" : "e-mail:",
		  "logout" : "Scollegati",
		  "update" : "Aggiorna",
		  "delete" : "Cancella",
		  "emailReq" : "campo e-mail obbligatorio",
		  "pwdReq" : "campo password obbligatorio",
		  "firstNameReq" : "campo Nome obbligatorio",
		  "lastNameReq" : "campo Cognome obbligatorio",
		  "cancel" : "Cancella",
		  "Thanks" : "Grazie per acquistare su Irpinia Express Store."
    	}

		var fr_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		 var sp_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		var de_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."		  
		}

		var pt_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Quantity" : "Quantity",
		  "Price" : "Price",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}
  
		$translateProvider.translations('en', en_translations);
		$translateProvider.translations('sp', sp_translations);
		$translateProvider.translations('it', it_translations);
		$translateProvider.translations('fr', fr_translations);
		$translateProvider.translations('de', de_translations);
		$translateProvider.translations('pt', pt_translations);
		$translateProvider.preferredLanguage('de');
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();

var myApp = angular.module("appLog",['pascalprecht.translate']);
myApp.controller("translateController", ["$scope", "$translate", function($scope, $translate) {
	$scope.changeLanguage = function(lang){
	$translate.use(lang);
	}
}]);

// Facebook integration ***Massimo Manganiello 16/06/2017 ***
window.fbAsyncInit = function() {
    FB.init({
      appId            : '469478263405054',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));