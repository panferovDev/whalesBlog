"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingnUp;

var _react = _interopRequireWildcard(require("react"));

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\SingnUp\\SingnUp.jsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SingnUp({
  setCurUser
}) {
  const [input, setInput] = (0, _react.useState)({});

  const inputHandler = e => {
    setInput(prev => ({ ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = e => {
    e.preventDefault();

    if (input?.name?.trim() && input?.email?.trim() && input?.password?.trim()) {
      fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(input)
      }).then(res => res.json()).then(res => setCurUser(res)).catch(err => console.log(err));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center logo mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Singn Up"), /*#__PURE__*/_react.default.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Singn Up")), /*#__PURE__*/_react.default.createElement("div", {
    className: "row mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 offset-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: submitHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2 mt-3 myLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email",
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: inputHandler,
    value: input.email || '',
    type: "email",
    name: "email",
    className: "form-control flatinput",
    id: "email",
    placeholder: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2 myLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name",
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: inputHandler,
    value: input.name || '',
    type: "text",
    name: "name",
    className: "form-control flatinput",
    id: "name",
    placeholder: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2 myLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password",
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: inputHandler,
    value: input.password || '',
    type: "password",
    name: "password",
    className: "form-control flatinput",
    id: "body",
    placeholder: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid gap-2 col-6 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-outline-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "Register"))))));
}