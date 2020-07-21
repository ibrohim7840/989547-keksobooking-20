'use strict';

window.filter = (function () {
  var selectType = document.querySelector('#housing-type');
  var selectPrice = document.querySelectorAll('#housing-price');

  var filterType = function (data) {
    if (selectType.value === 'any') {
      return data;
    } else {
      return data.slice().filter(function (element) {
        return element.offer.type === selectType.value;
      });
    }
  };

  var filterPrice = function (data) {
    if (selectType.value === 'any') {
      return data;
    } else {
      return data.slice().filter(function (element) {
        return element.offer.type === selectType.value;
      });
    }
  };

  return {
    filterType: filterType,
    filterPrice: filterPrice
  };
})();
