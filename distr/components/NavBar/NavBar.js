"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\NavBar\\NavBar.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBar({
  user
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light",
    style: {
      backgroundColor: '#e3f2fd'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Whales blog")), /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse justify-content-end ",
    id: "navbarNav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link",
    "aria-current": "page",
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Home")), user ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 23
    }
  }, "\u041F\u0440\u0438\u0432\u0435\u0442,", ' ', user.name, ' ', "!")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "/user/logout",
    tabIndex: "-1",
    "aria-disabled": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, "\u0412\u044B\u0445\u043E\u0434"))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link",
    to: "/user/signin",
    tabIndex: "-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }, "signin")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link end-0",
    to: "/user/signup",
    tabIndex: "-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, "signup"))))))));
}

var _default = NavBar;
exports.default = _default;