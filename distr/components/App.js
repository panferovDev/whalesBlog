"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _NavBar = _interopRequireDefault(require("./NavBar/NavBar"));

var _SingnUp = _interopRequireDefault(require("./SingnUp/SingnUp"));

var _SignIn = _interopRequireDefault(require("./SignIn/SignIn"));

var _MainPage = _interopRequireDefault(require("./MainPage/MainPage"));

var _AuthCheck = _interopRequireDefault(require("./AuthCheck/AuthCheck"));

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\App.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App({
  user,
  posts
}) {
  const [curUser, setCurUser] = (0, _react.useState)(user);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_NavBar.default, {
    user: curUser,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_MainPage.default, {
      user: curUser,
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 34
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/user/signin",
    element: /*#__PURE__*/_react.default.createElement(_AuthCheck.default, {
      user: curUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/_react.default.createElement(_SignIn.default, {
      setCurUser: setCurUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/user/signup",
    element: /*#__PURE__*/_react.default.createElement(_AuthCheck.default, {
      user: curUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, /*#__PURE__*/_react.default.createElement(_SingnUp.default, {
      setCurUser: setCurUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
}

var _default = App;
exports.default = _default;