"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthCheck;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\AuthCheck\\AuthCheck.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthCheck({
  children,
  user
}) {
  const location = (0, _reactRouterDom.useLocation)();

  if (user) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/",
      state: {
        from: location
      },
      replace: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }
    });
  }

  return children;
}