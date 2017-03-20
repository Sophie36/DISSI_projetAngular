/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
blog.controller('addArticleController', function ($scope, $http) {
  $scope.hello = "hello World !";
  
listCategorie();
function listCategorie(){
    $http({
        method: 'get',
        url: 'getCategorie'
    }).then(function (resp){
        console.log(resp);
        $scope.listCategorie = resp.data;
    });
}
$scope.sendArticle= function(){
    console.log($scope.newArticle);
    var newArticle = {
        titre : $scope.newArticle.titre,
        header : $scope.newArticle.header,
        body : $scope.newArticle.body,
        idCategory : $scope.newArticle.idCategory,
    };
    $http.post('addArticle', newArticle).then(function (resp){
        $scope.newArticle.titre = "";
        $scope.newArticle.header = "";  
        $scope.newArticle.body = "";
        $scope.newArticle.idCategory = "";
    });
}

$scope.cancelnewArticle= function(){
    if($scope.newArticle !== undefined){
        $scope.newArticle.titre,
        $scope.newArticle.header,
        $scope.newArticle.body,
        $scope.newArticle.idCategory
    }
}
   
});