(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);



// CONTROLLERS

ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckoffService) {
 var list = this;

 list.items = ShoppingListCheckoffService.getTobuyItems();

 list.bought = function (index) {
  ShoppingListCheckoffService.alreadyBought(index);
 }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckoffService) {
 var list = this;

 list.items = ShoppingListCheckoffService.getBoughtItems();
}





// SERVICE

// If not specified, maxItems assumed unlimited
function ShoppingListCheckoffService() {
  var service = this;

  // List of shopping items
  var tobuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 3 },
    { name: "biscuits", quantity: 9 },
    { name: "pizzas", quantity: 21 },
    { name: "toilet papers", quantity: 13 }
  ];

  var boughtItems = [];

  service.getTobuyItems  = function () {
    console.log(tobuyItems);
    return tobuyItems;
  }

  service.getBoughtItems = function () {
    console.log(boughtItems);
    return boughtItems;
  }

  service.alreadyBought = function (index) {
    boughtItems.push(tobuyItems[index]);
    tobuyItems.splice(index, 1);
  } 
}

})();
