(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController )
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  this.items = ShoppingListCheckOffService.toBuy;
  this.buyItem = function(index){
    ShoppingListCheckOffService.buyItem(index);
  }

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  this.items = ShoppingListCheckOffService.bought;

}

function ShoppingListCheckOffService(){
  this.toBuy = [
    {name: 'apples', quantity : 3},
    {name: 'bananas' , quantity : 4},
    {name: 'oranges', quantity : 5},
    {name: 'strawberries', quantity : 20},
    {name: 'sugar', quantity : 1}];
  this.bought = [];

  this.buyItem = function(index){
    var item = this.toBuy.splice(index, 1)[0];
    this.bought.push(item);
  }
}

})();
