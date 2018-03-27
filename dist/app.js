'use strict';

var _helper = require('./helper/helper');

var _helper2 = _interopRequireDefault(_helper);

var _file = require('./helper/file');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_helper2.default.foo);

var teste = 'Hello World!';
console.log(teste);

var func1 = function func1(x) {
  return x * x;
};

var func2 = function func2(x, y) {
  return x + y;
};

var formatNumber = function formatNumber(value, params, locale) {
  params = params || {};
  var formatted = new Intl.NumberFormat(locale, params);
  var output = '';

  try {
    if (params.valueInCents === 'true') {
      value = parseInt(value) / 100;
    }
    output = formatted.format(value);
    output = output.replace(/^([^0-9]+)/gm, '$1 ');
  } catch (e) {
    logger.log('ERROR', 'error formatNumber helper: ', e, ' / val: ', value);
  }
  return output;
};

/* obtendo data da API themoviedb */
var apiURL = 'https://api.themoviedb.org/3/movie/550?api_key=e2c70d159f475c3cf6bd625fd21f2312';
(0, _file2.default)(apiURL, function (data) {
  var html = "";
  Object.keys(data).forEach(function (key) {
    Object.keys(data.production_companies).forEach(function (key) {
      html += '\n        <div>\n            <img src=\'' + data.production_companies[key].logo_path + '\'/>\n            <div>\n                <p>' + data.production_companies[key].name + '</p>\n            </div>\n        </div>';
    });
  });
  //document.getElementById("list").innerHTML = html;  
});