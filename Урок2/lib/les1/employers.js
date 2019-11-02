"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames_olalala = exports.employers = void 0;
// 1 файл: переменная employers, employersNames и манипуляции с ней.
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
exports.employers = employers;
var employersNames_olalala = employers.filter(function (elm) {
  return elm.length > 0;
}).map(function (elm) {
  return elm.toLowerCase().trim();
});
exports.employersNames_olalala = employersNames_olalala;