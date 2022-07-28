"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogForm;

var _react = _interopRequireWildcard(require("react"));

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\BlogForm\\BlogForm.jsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BlogForm({
  setCurPosts,
  user
}) {
  const [input, setInput] = (0, _react.useState)({});

  const inputHandler = e => {
    setInput(prev => ({ ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = e => {
    e.preventDefault();

    if (input?.title?.trim() && input?.body?.trim()) {
      fetch('/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(input)
      }).then(res => res.json()).then(res => {
        setCurPosts(prev => [{ ...res,
          User: { ...user
          }
        }, ...prev]);
        setInput({});
      }).catch(err => console.log(err));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-10 offset-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: submitHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2 myLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "title",
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Title"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: inputHandler,
    value: input.title || '',
    type: "text",
    name: "title",
    className: "form-control flatinput",
    id: "title",
    placeholder: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2 myLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "body",
    className: "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Body"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: inputHandler,
    value: input.body || '',
    type: "text",
    name: "body",
    className: "form-control flatinput",
    id: "body",
    placeholder: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-grid gap-2 col-6 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-outline-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Send")))));
}