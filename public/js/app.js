'use strict';

var blog = angular.module('blog', ['ngRoute', 'ngResource','ngSanitize']);
blog.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider
                .when("/blog",{
                    title: "Home",
                    templateUrl:"pages/blog.html",
                    controller:'blogCtrl'
                })
                .when("/contact",{
                    title: "Contact",
                    templateUrl:"pages/contact.html",
                    controller:'blogCtrl'
                })
                .when("/cv",{
                    title: "CV",
                    templateUrl:"pages/cv.html",
                    controller:'blogCtrl'
                })
                .when("/insta",{
                    title: "Insta",
                    templateUrl:"pages/insta.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPerso",{
                    title: "Projets Personnel",
                    templateUrl:"pages/projetsPerso.html",
                    //controller:'blogCtrl'
                })
                .when("/projetsPro",{
                    title: "Projets Professionnel",
                    templateUrl:"pages/projetsPro.html",
                    //controller:'blogCtrl'
                })
                .when("/addArticle",{
                        title : "Add Article",
                    templateUrl:"pages/addArticle.html",
                    controller:'addArticleController'
                })
                .otherwise({
                    redirectTo: '/blog'
                });
            }]);
    blog.run(['$rootScope', function($rootScope){
            $rootScope.$on('$routeChangeSuccess', function (event,current,previous){
                $rootScope.title = current.$$route.title;
            });
    }])
    blog.filter('ashtml', function ($sce){
        return $sce.trustAshtml;
    });


