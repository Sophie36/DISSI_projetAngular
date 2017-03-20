'use strict';

var blog = angular.module('blog', ['ngRoute']);
blog.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider
                .when("/blog",{
                    templateUrl:"pages/blog.html",
                    controller:'blogCtrl'
                })
                .when("/contact",{
                    templateUrl:"pages/contact.html",
                    controller:'blogCtrl'
                })
                .when("/cv",{
                    templateUrl:"pages/cv.html",
                    controller:'blogCtrl'
                })
                .when("/insta",{
                    templateUrl:"pages/insta.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPerso",{
                    templateUrl:"pages/projetsPerso.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPro",{
                    templateUrl:"pages/projetsPro.html",
                    //controller:'blogCtrl'
                })
                .otherwise({
                    redirectTo: '/blog'
                });
            }]);



