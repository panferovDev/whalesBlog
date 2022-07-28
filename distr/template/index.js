"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = template;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-router-dom/server");

var _server2 = require("react-dom/server");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _hbs = _interopRequireDefault(require("hbs"));

var _App = _interopRequireDefault(require("../components/App"));

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\template\\index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function template(initState) {
  const Path = _path.default.join(__dirname, '../view/index.hbs');

  const html = _fs.default.readFileSync(Path, 'utf-8');

  const hbsTemplate = _hbs.default.compile(html);

  const reactComponent = (0, _server2.renderToString)( /*#__PURE__*/_react.default.createElement(_server.StaticRouter, {
    location: initState.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_App.default, _extends({}, initState, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }))));
  return hbsTemplate({
    initState: JSON.stringify(initState),
    content: reactComponent
  });
}