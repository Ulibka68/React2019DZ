"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeBusiness = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _employers = require("./employers.js");

var SponsorsA = _interopRequireWildcard(require("./sponsors.js"));

// 3 файл, результирующий: функцию makeBusiness превратить в класс, у которого будет метод для вывода всей информации в консоль.
//  Здесь же создать экземпляр класса, который будет использовать полученные данные.
var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    (0, _classCallCheck2.default)(this, MakeBusiness);
    this.props = {
      employers: _employers.employers,
      employersNames: _employers.employersNames_olalala
    };
    this.propsSponsor = {
      sponsors: SponsorsA.sponsors,
      calcCash: SponsorsA.calcCash,
      money: SponsorsA.money
    };
  }

  (0, _createClass2.default)(MakeBusiness, [{
    key: "showProps",
    value: function showProps() {
      console.log("employers : ");
      console.log(_employers.employers);
      console.log("employersNames : ");
      console.log(_employers.employersNames_olalala);
    }
  }, {
    key: "makeBusiness",
    value: function makeBusiness(argum) {
      var _argum = (0, _slicedToArray2.default)(argum, 2),
          owner = _argum[0],
          director = _argum[1];

      var cash = this.propsSponsor.money;
      var emp = this.props.employersNames;
      director = director || 'Victor';
      var sumSponsors = [].concat((0, _toConsumableArray2.default)(this.propsSponsor.sponsors.eu), (0, _toConsumableArray2.default)(this.propsSponsor.sponsors.rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
      console.log('And we have a sponsors: ');
      console.dir(sumSponsors);
      console.log("Note. Be careful with ".concat(this.propsSponsor.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);
  return MakeBusiness;
}(); // makeBusiness1( ['Sam', null, money1, employersNames1]);


exports.MakeBusiness = MakeBusiness;