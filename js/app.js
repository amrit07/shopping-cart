var myApp = angular.module('store',[]);
myApp.controller('ListController', ['$http', function ($http) {
  var listController = this;
    listController.listData = [];
    listController.price =0;
    listController.init = function(){
    $http.get('/js/cart.json')
        .then(function (responce) {
            listController.listData = responce.data.productsInCart;
        },
            function(error){
            console.log("error occured ",error);
            }
        );
  };
  listController.total = function(){
      var total = 0;
      angular.forEach(listController.listData,function(item){
          total = total + (item.p_quantity * item.p_price);
      });
      return total;
  };
  listController.init();

}]);