"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = calcCash;
exports.money = exports.sponsors = void 0;
// 2 файл: переменная sponsors, money и функция calcCash.
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

function calcCash(CashArray) {
  var StartVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return CashArray.reduce(function (StartVal, elm) {
    return StartVal + elm;
  });
}

var money = calcCash(sponsors.cash);
exports.money = money;