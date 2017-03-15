blog.controller('blogCtrl', function ($scope, $http) {
  $scope.hello = "hello World !";
  //$scope.machin = "hello Machin !";
  //$scope.bidule = "coucou c'est moi bidule !";
  getArticles();
  getCategorie();
  getArticlesByCategory();
  
function getArticles(){
    $http({
        method: 'get',
        url: 'http://localhost:8090/getArticles'
    }).then(function (resp){
        console.log(resp);
        $scope.listArticles = resp.data;
    });
}
function getCategorie(){
    $http({
        method: 'get',
        url: 'http://localhost:8090/getCategorie'
    }).then(function (resp){
        console.log(resp);
        $scope.listCategorie = resp.data;
    });
}
$scope.getArticlesByCategory= function(index){
    var categorieSelected = {categorie:index};
    $http.post('http://localhost:8090/getArticlesByCategory', categorieSelected).then(function (resp){
        
        $scope.listArticles = resp.data;  
       
    });
}
});



