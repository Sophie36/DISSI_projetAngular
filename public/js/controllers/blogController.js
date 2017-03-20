blog.controller('blogCtrl', function ($scope, $http) {
  $scope.hello = "hello World !";
  //$scope.machin = "hello Machin !";
  //$scope.bidule = "coucou c'est moi bidule !";
  getArticles();
  getCategorie();
  
  
function getArticles(){
    $http({
        method: 'get',
        url: 'getArticles'
    }).then(function (resp){
        console.log(resp);
        $scope.listArticles = resp.data;
    });
}
function getCategorie(){
    $http({
        method: 'get',
        url: 'getCategorie'
    }).then(function (resp){
        console.log(resp);
        $scope.listCategorie = resp.data;
    });
}
$scope.getArticlesByCategory= function(index){
    var categorieSelected = {categorie:index};
    $http.post('getArticlesByCategory', categorieSelected).then(function (resp){
        
        $scope.listArticles = resp.data;  
       
    });
}
});



