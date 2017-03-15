'use strict';

var blog = angular.module('blog', ['ngRoute']);
blog.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider
                .when("/blog",{
                    templateUrl:"public/pages/blog.html",
                    controller:'blogCtrl'
                })
                .when("/contact",{
                    templateUrl:"public/pages/contact.html",
                    controller:'blogCtrl'
                })
                .when("/cv",{
                    templateUrl:"public/pages/cv.html",
                    controller:'blogCtrl'
                })
                .when("/insta",{
                    templateUrl:"public/pages/insta.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPerso",{
                    templateUrl:"public/pages/projetsPerso.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPro",{
                    templateUrl:"public/pages/projetsPro.html",
                    //controller:'blogCtrl'
                })
                .otherwise({
                    redirectTo: '/blog'
                });
            }]);



